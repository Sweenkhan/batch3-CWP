import React from 'react'

function Product({product}) {
  return (
     <div  style={{ position :"relative" , border: "1px solid black", borderRadius: "0.7rem", padding: "1rem"}} className="product">
            <p style={{position: "absolute", bottom: "-44px", left: "5px"}}>{product.id}</p>
            <h3>{product.name}</h3>
            <p>Price {product.price}</p>
            <p>Quantity {product.quantity}</p>
          </div>
  )
}

export default Product