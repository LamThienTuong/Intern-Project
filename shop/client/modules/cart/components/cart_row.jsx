import React from "react";

class CartRow extends React.Component {
  handleRemove(e) {
    e.preventDefault();
    this.props.removeFromCart(this.props.item._id);
  }

  render() {
    return (
      <tr>
        <td>
          <img
            src={this.props.item.productImage}
            style={{ height: 100, weight: 100 }}
          />
        </td>
        <td>{this.props.item.productName}</td>
        <td>{this.props.item.productQty}</td>
        <td>{this.props.item.productTotal.toFixed(2)}$</td>
        <td>
          <a href="#" onClick={this.handleRemove.bind(this)}>
            <span className="glyphicon glyphicon-remove" />
          </a>
        </td>
      </tr>
    );
  }
}

export default CartRow;
