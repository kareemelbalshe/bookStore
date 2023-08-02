import { useContext, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import "./header.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext";

export default function Header() {
    const [toggle, setToggle] = useState(false);
    const { cartItemLength } = useContext(CartContext);
  return (
    <>
      <header className="header">
        <div className="header-top">
          <div
            onClick={() => setToggle((prev) => !prev)}
            className="header-top-menu"
          >
            {toggle ? <i className="bi bi-x-lg"></i> : <MenuIcon />}
          </div>
          <div className="header-top-phone">
            <i className="bi bi-telephone-fill"></i>
            123-456-789
          </div>
          <div className="header-top-text">Welcome To Book Store</div>
          <Link to="/login" className="header-top-link">
            <PersonIcon style={{ fontSize: "29px", marginTop: "5px" }} />
            Login
          </Link>
        </div>
        <div className="header-middle">
          <div className="header-middle-logo">
            <b>Book</b>
            <i className="bi bi-book"></i>
            <b>Store</b>
          </div>
          <div className="header-middle-search-box">
            <input
              className="header-middle-search-input"
              type="search"
              placeholder="Search in book store..."
            />
            <i className="bi bi-search"></i>
          </div>
          <Link to="/cart" className="header-middle-cart-wrapper">
            {
                cartItemLength>0&&(
                    <b className="cart-notification">{cartItemLength}</b>
                )
            }
            <i className="bi bi-cart2"></i>
          </Link>
        </div>
        <Navbar toggle={toggle} setToggle={setToggle} />
      </header>
    </>
  );
}
