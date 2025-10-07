import products from "./data"
import Product from "./Product"

function App() {



  return (
    <>
      <h2>Products</h2>

      <div className="Products" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>

        {
          products.map((productData) => {
            return (
              <Product product={productData} key={productData.id} />
            )
          })
        }

      </div>
    </>
  )
}

export default App
