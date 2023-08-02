/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../book-slider/Rating";
import "./modal.css";
import { useContext } from "react";
import CartContext from "../../context/cartContext";

export default function Modal({ bookData, setOpenModal }) {
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);
  const { image, title, inStock, rating, reviews, author, price, id } =
    bookData;
  return (
    <>
      <div onClick={() => setOpenModal(false)} className="modal-container">
        <div
          onClick={(event) => event.stopPropagation()}
          className="modal-content"
        >
          <i
            className="bi bi-x-circle-fill modal-icon"
            onClick={() => setOpenModal(false)}
          ></i>
          <div className="model-content-img">
            <img src={`/books/${image}`} alt="" />
          </div>
          <div className="model-content-info">
            <h5 className="model-content-info-title">{title}</h5>
            <div className="model-content-info-stock">
              <b>status: </b>
              {inStock ? "in stock" : "not in stock"}
            </div>
            <Rating rating={rating} reviews={reviews} />
            <div className="model-content-info-author">
              <b>Author: </b>
              {author}
            </div>
            <div className="model-content-info-price">
              <b>Price: </b>${price}
            </div>
            <div className="model-add-to-cart">
              <input
                type="number"
                min="1"
                max="100"
                className="model-add-to-cart-input"
                value={qty}
                onChange={(e) => e.target.value}
              />
              <button
                onClick={() => addToCart({ ...bookData, quantity: qty })}
                className="model-add-to-cart-btn"
              >
                <i className="bi bi-cart-plus"></i>
                Add To Cart
              </button>
            </div>
            <Link to={`/book/${id}`} className="model-content-info-link">
              See More Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
