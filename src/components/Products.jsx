import {useRef} from "react"

import defaultimage from "../assets/images/product-1.jpg"

export default function Products () {

  const heroRef = useRef(null)

  const heroScroll = () => heroRef.current.scrollIntoView() 

    return(
<>
      {/*Hero */}
    
        <header className="hero">
      <div className="banner">
        <h1 className="banner-title">Pokemon Collection</h1>
        <button onClick={heroScroll} className="banner-btn">Shop Now</button>
      </div>
    </header>
    


        <section ref={heroRef} className="products">
      <div className="section-title">
        <h2>Our Products</h2>
      </div>
      <div className="products-center">
        
        <article className="product">
          <div className="img-container">
            <img
              src={defaultimage}
              alt="Product image"
              className="product-image"
            />
            <button className="bag-btn" data-id="1">Add to basket</button>
          </div>
          <h3>title</h3>
          <h4>price</h4>
        </article>

        <article className="product">
          <div className="img-container">
            <img
              src={defaultimage}
              alt="Product image"
              className="product-image"
            />
            <button className="bag-btn" data-id="1">Add to basket</button>
          </div>
          <h3>title</h3>
          <h4>price</h4>
        </article>

        <article className="product">
          <div className="img-container">
            <img
              src={defaultimage}
              alt="Product image"
              className="product-image"
            />
            <button className="bag-btn" data-id="1">Add to basket</button>
          </div>
          <h3>title</h3>
          <h4>price</h4>
        </article>
        
        
      </div>
    </section>
    </>
    )
}