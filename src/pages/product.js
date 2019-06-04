import React, { Component } from "react"
import Button from "../components/button"
import {StaticQuery, graphql} from 'gatsby'

class Product extends Component{
    // constructor(){
    //     this.handleSubmit.bind(this);
    // }
    
    componentDidMount() {
        this.stripe = window.Stripe('pk_test_DuPgEjP2DlgXOJ8WlbjTtDF100BcJoaBjJ');
        }  
        
        handleSubmit(sku){
            return event => {
                event.preventDefault();

                this.stripe.redirectToCheckout({
                    items: [{sku, quantity: 1}],
              
                    successUrl: 'http://localhost:8000/success',
                    cancelUrl: 'http://localhost:8000/cancel',
                  })
                  .then(function (result) {
                    if (result.error) {
                      console.log(result.error.message)
                    }
                  });
            }
        }

        render(){
            const {id, currency, price, name } = this.props;
            const priceFloat = (price/100).toFixed(2);
            const formattedPrice = Intl.NumberFormat('en-US', {style: 'currency', currency}).format(priceFloat)
            return (
                <form onSubmit={this.handleSubmit(id)}>
                    <h2>{name} {formattedPrice}</h2>
                    <button type="submit">Buy Now</button>
                </form>
            )
        }
    }

    export default () =>(
        <StaticQuery
        query={graphql`
        {
        allStripeSku {
            edges {
              node {
                id
                currency
                price
                attributes {
                  name
                }
              }
            }
          }
        }
        `}
        render={data => (
          <div>
            {data.allStripeSku.edges.map(({ node: sku })=>(
              <Product 
                id={sku.id}
                currency={sku.currency}
                price={sku.price}
                name={sku.attributes.name}
              />
            ))}
          </div>
          
          )}

        />
    )