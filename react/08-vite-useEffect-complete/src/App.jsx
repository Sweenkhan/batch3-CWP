import React, { useEffect, useState } from 'react'
import products from './data'
import Timer from './Timer'



function App() {

  const [search, setSearch] = useState("")
  const [allProducts, setAllProducts] = useState(products)


  useEffect(() => {

    if (search.trim() != "") {

      let filterData = allProducts.filter((pro) => pro.productName.split("").includes(search))

      if (filterData.length !== 0) {
        setAllProducts(filterData)
      }

    } else {
      setAllProducts(products)
    }



  }, [search])



  return (
    <div>
      <h2>Products</h2>
       {false ? <Timer /> : ""}
        
      <input type='text' placeholder='Search Products.....' onChange={(e) => setSearch(e.target.value)} value={search} />
      {
        allProducts.map((product, index) => {
          return (
            <div key={index} style={{ border: "1px solid black", margin: "1rem", padding: "1rem", borderRadius: "10px" }}>
              <p>{product.productName}</p>
              <p>Rs. {product.price}</p>
              <p>Quantity {product.quantity}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App