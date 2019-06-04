import React, { Component } from "react"
class Button extends Component{
    componentDidMount() {
        this.stripe = window.Stripe('pk_test_DuPgEjP2DlgXOJ8WlbjTtDF100BcJoaBjJ');
    }
    render(){
        return(
            <form style = {{backgroundColor:"transparent"}} onSubmit= {event => {
                event.preventDefault()
                this.stripe.redirectToCheckout({
                    items: [{sku: 'sku_FBoUvgKyN7dVQJ', quantity: 1}],
              
                    successUrl: 'http://localhost:8000/success',
                    cancelUrl: 'http://localhost:8000/cancel',
                  })
                  .then(function (result) {
                    if (result.error) {
                
                      let displayError = document.getElementById('error-message');
                      displayError.textContent = result.error.message;
                    }
                  });
            }}>

                <button type="submit">Buy Now</button>
            </form>
        )
    }
}

export default Button