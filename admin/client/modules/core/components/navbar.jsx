import React from "react";
import "./navbar.css";
// import Logo from "../assets/logo.svg";
// import OverviewDark from "../assets/OverviewDark.svg";
// import OrderDark from "../assets/OrdersDark.svg";
// import Products from "../assets/ProductsDark.svg";
// import Payments from "../assets/PaymentDark.svg";
// import Promotions from "../assets/PromotionDark.svg";
// import Setting from "../assets/SettingDark.svg";

class Navbar extends React.Component {
  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    return (
      <div id="navbar" className="Rectangle-2">
        <a href="/">
          <img src="/img/logo.svg" className="logo" alt="Logo" />
        </a>
        <ul>
          <li>
            <a href="/">
              <img src="/img/OrdersDark.svg" className="icon" alt="orders" />
              <label className="Type-Something">Orders</label>
            </a>
          </li>
          <li>
            <a href="/products">
              <img
                src="/img/ProductsDark.svg"
                className="icon"
                alt="products"
              />
              <label className="Type-Something">Products</label>
            </a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            {/* <a href="#"> */}
            <img src="/img/PaymentDark.svg" className="icon" alt="payments" />
            <p className="Type-Something">Payments</p>
            {/* </a> */}
          </li>
          <li>
            {/* <a href="#"> */}
            <img
              src="./img/PromotionDark.svg"
              className="icon"
              alt="promotions"
            />
            <p className="Type-Something">Promotions</p>
            {/* </a> */}
          </li>
          <li>
            {/* <a href="#"> */}
            <img src="/img/SettingDark.svg" className="icon" alt="setting" />
            <p className="Type-Something">Setting</p>
            {/* </a> */}
          </li>

          <li>
            <a href="#" onClick={this.handleLogout.bind(this)}>
              <img src="/img/Prev.svg" className="icon" alt="logout" />
              <label className="Type-Something">Logout</label>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
