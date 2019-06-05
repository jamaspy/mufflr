import React, { Component } from "react"

import {StaticQuery, graphql} from 'gatsby'
import styles from "../styles/allproducts.module.scss"
import Placeholder from "./placeholder"

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
          console.log(this.props);
          
            const {id, currency, price, name, image } = this.props;
            const priceFloat = (price/100).toFixed(2);
            const formattedPrice = Intl.NumberFormat('en-US', {style: 'currency', currency}).format(priceFloat)
            return (
              <div className={styles.div}>
                <img style={{width:300, height:350}} src={image} alt=""/>
                <form style={{maxWidth:300, backgroundColor:"#243B55", color:"white", fontWeight:300, padding:10}} onSubmit={this.handleSubmit(id)}>
                    <p>{name}</p>
                    <p>{formattedPrice}</p>
                    <button type="submit">Buy Now</button>
                </form>
                </div>
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
                image
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
                image={sku.image}
              />
            ))}
          </div>
          
          )}

        />
    )