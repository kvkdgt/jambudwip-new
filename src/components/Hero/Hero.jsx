import React, { useState } from "react";
import "./Hero.css";
import ProductData from "../../products.json";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    imgLink:
      "https://5.imimg.com/data5/ANDROID/Default/2020/11/MQ/QI/NR/112378889/product-jpeg.jpg",
    name: "Gold",
    categorySlug: "gold",
    redirectLink: "#",
  },
  {
    id: 2,
    imgLink:
      "https://rukminim2.flixcart.com/image/850/1000/kr2e3680/jewellery-set/0/t/e/whitenewnns01-haniya-original-imag4yfmfqsfsy7g.jpeg",
    name: "Silver",
    categorySlug: "silver",
    redirectLink: "#",
  },
  {
    id: 3,
    imgLink:
      "https://manubhai.in/SocialMedia/post_artworks/22062021125240210605Manubhai1a-min.jpg",
    name: "Diamond Jwellery",
    categorySlug: "diamond-jwellery",
    redirectLink: "#",
  },
  {
    id: 4,
    imgLink:
      "https://dailybuyys.com/cdn/shop/products/inde78777_grande.jpg",
    name: "All",
    categorySlug: "all",
    redirectLink: "#",
  },
 
  // Add more objects as needed
];

const Hero = () => {
  return (
    <>
      <div className="hero-main">
        <div className="category-header">
          <h2 style={{ fontWeight: 500 }}>Our Varieties</h2>
        </div>
        <div className="card-container">
          {categories.map((category) => (
            <Link to={`/product/${category.categorySlug}`}>
              <div key={category.id} className="card">
                <img src={category.imgLink} alt={category.name} />
                <div className="card-content">
                  <span className="category-name">{category.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{}} className="category-header category-header-2">
          <h2 style={{ fontWeight: 500 }}>Our trending items</h2>
          <Link to={"/product/all"}>
            {" "}
            <span>View all</span>
          </Link>
        </div>
        <div className="product-card-group">
          {ProductData.products.slice(0, 5).map((product) => {
            return (
              <div class="product-card">
                <img src={product.imageLink} alt="Card 1" />
                <div class="card-content">
                  <div className="product-card-category">
                    {product.category}
                  </div>
                  <div className="product-card-item">{product.productName}</div>
                  <div className="product-card-price">
                    Rs. {product.price}.00
                  </div>
                  <a
                    href={
                      "https://wa.me/919426476994?text=Hello%2C%20Sending%20message%20from%20your%20site%2C%20and%20i%20am%20intrested%20in%20your%20*" +
                      product.productName +
                      "*"
                    }
                    target="_blank"
                  >
                    {" "}
                    <div className="product-card-button">Buy Now</div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{}} className="category-header category-header-3">
          <h2 style={{ fontWeight: 500 }}>Our Gold Collection</h2>
          <Link to={"/product/bengali-sweets"}>
            <span>View all</span>
          </Link>
        </div>
        <div className="product-card-group">
          {ProductData.products.filter((item) => item.categorySlug == 'gold').slice(0, 5).map((product) => {
            return (
              <div class="product-card">
                <img src={product.imageLink} alt="Card 1" />
                <div class="card-content">
                  {/* <div className="product-card-category">{product.category}</di v> */}
                  <div className="product-card-item">{product.productName}</div>
                  <div className="product-card-price">
                    Rs. {product.price}.00
                  </div>
                  <a
                    href={
                      "https://wa.me/919426476994?text=Hello%2C%20Sending%20message%20from%20your%20site%2C%20and%20i%20am%20intrested%20in%20your%20*" +
                      product.productName +
                      "*"
                    }
                    target="_blank"
                  >
                    {" "}
                    <div className="product-card-button">Buy Now</div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{}} className="category-header category-header-3">
          <h2 style={{ fontWeight: 500 }}>Our silver collection</h2>
          <Link to={"/product/namkeen"}>
            <span>View all</span>
          </Link>
        </div>
        <div className="product-card-group">
          {ProductData.products
          .filter((item) => item.categorySlug == 'silver')
          .slice(0, 5).map((product) => {
            return (
              <div class="product-card">
                <img src={product.imageLink} alt="Card 1" />
                <div class="card-content">
                  {/* <div className="product-card-category">{product.category}</di v> */}
                  <div className="product-card-item">{product.productName}</div>
                  <div className="product-card-price">
                    Rs. {product.price}.00
                  </div>
                  <a
                    href={
                      "https://wa.me/919426476994?text=Hello%2C%20Sending%20message%20from%20your%20site%2C%20and%20i%20am%20intrested%20in%20your%20*" +
                      product.productName +
                      "*"
                    }
                    target="_blank"
                  >
                    {" "}
                    <div className="product-card-button">Buy Now</div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hero;
