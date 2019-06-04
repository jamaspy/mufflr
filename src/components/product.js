import React from "react"


export default () => (
    <div style={{marginRight: 40, border: "1px solid grey", textAlign: "justify", borderRadius: 10, padding:20, maxWidth: "50%"}} className="product">
        <div className="product__name">
            <h1>Leather Jacket</h1>
        </div>
        <div className="product__description">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, at ex fugit pariatur id obcaecati labore dignissimos quibusdam ipsa, laboriosam, molestiae nihil deserunt animi tempora repellendus ab laborum! Repellat, dolorem.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, at ex fugit pariatur id obcaecati labore dignissimos quibusdam ipsa, laboriosam, molestiae nihil deserunt animi tempora repellendus ab laborum! Repellat, dolorem.</p>
        </div>
        <div className="product__action">
        <select value="james">
           <option value="sm">Small</option>
           <option value="md">Medium</option>
           <option value="lg">Large</option>
           <option value="xl">X-Large</option>
           <option value="xxl">XX-Large</option>
        </select>​ 
<button>Buy Now</button>
        </div>
    </div>
)