import React from 'react'
import '../CSS_files/Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className="logo">
                    <h1>Shopp Cart</h1>
                </div>
                <div className="menu-div">
                    <ul>
                        <li>Home</li>
                        <li>Product</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
 