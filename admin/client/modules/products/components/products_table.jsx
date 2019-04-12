import React from "react";
import ProductsRow from "./products_row.jsx";
import "./productstate.css";

class ProductsTable extends React.Component {
  render() {
    const rows = this.props.products.map(product => {
      return (
        <ProductsRow
          key={product._id}
          product={product}
          categories={this.props.categories}
          productsUpdate={this.props.productsUpdate}
          productsDelete={this.props.productsDelete}
        />
      );
    });
    return (
      <table className="table-style">
        <tbody>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th />
            <th />
            <th />
          </tr>
          {rows}
        </tbody>
      </table>
    );
  }
}
export default ProductsTable;
