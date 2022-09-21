import {useState} from "react"
import iconMenu from "../assets/images/icon-menu.svg"
import pokelogo from "../assets/images/poke.png"
import carticon from "../assets/images/icon-cart.svg"
import closeicon from "../assets/images/icon-close.svg"
import defaultimage from "../assets/images/product-1.jpg"

export default function Navbar () {

      //Burger menu functionality
  const [activeBurger, setBurger] = useState(false)

  const toggleBurger = () => {
    activeBurger ? setBurger(false) : setBurger(true)
  }

   //Cart menu functionality
   const [activeCart, setCart] = useState(false)

   const toggleCart = () => {
     activeCart ? setCart(false) : setCart(true)
   }
 

    return(
<>
        {/* Navbar */}


        {/* /* Hamburger menu */ }
        <div className={activeBurger ? "burger showBurger" : "burger"}>
            <span className="closeBurger"
          ><img onClick={toggleBurger} src={closeicon} alt="Close Cart Icon"
        /></span>
      <ul>
        <li>Categories</li>
        <li id="logbutton">Log in</li>
      </ul>
    </div>

        {/* Cart Menu */}
    <div className={activeBurger ? "cart-overlay" : ""}> 
    <div className={activeCart ? "cart-overlay" : ""}>
      <div className={activeCart ? "cart showCart" : "cart"}>
        <span className="close-cart"
          ><img onClick={toggleCart} src={closeicon} alt="Close Cart Icon"
        /></span>
        <h2>Your Cart</h2>
        <div className="cart-content">

          {/* <!-- Cart Item Start --> */}
          <div className="cart-item">
            <img src={defaultimage} alt="Product 1 image" />
            <div>
              <h4>Card Pack</h4>
              <h5>$200</h5>
              <span className="remove-item">Remove</span>
            </div>
            <div>
              <i className="fa-solid fa-arrow-up"></i>
              <p className="item-amount">1</p>
              <i className="fa-solid fa-arrow-down"></i>
            </div>
          </div>
          {/* <!-- Cart Item End --> */}
        </div>
        <div className="cart-footer">
          <h3>Your Total: <span className="cart-total">0</span></h3>
          <button className="clear-cart banner-btn">Clear cart</button>
        </div>
      </div>
    </div>
    </div>
        <nav className="navbar">
      <div className="navbar-center">
        <span className="nav-icon">
          <img src={iconMenu} onClick={toggleBurger} alt="Menu Icon" />
        </span>
        <img id="pokelogo" src={pokelogo} alt="Store Logo" />
    
        {/* Cart Icons */}
        <div className="cart-btn">
          <span className="nav-icon"
            ><img onClick={toggleCart} src={carticon} alt="Cart Icon"
          /></span>
          <div className="cart-items">0</div>
        </div>
      </div>
    </nav>
    </>
    )
}