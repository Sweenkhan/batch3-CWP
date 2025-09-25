import React from 'react'
import "./Header.css"

function Header() {

    
  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem"}}>

        <h2 className='logo'>Shopify</h2>
        <ul style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", listStyleType: "none"}}>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
        </ul>
    </div>
  )
}

export default Header