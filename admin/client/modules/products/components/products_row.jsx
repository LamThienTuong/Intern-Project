import React from "react";
import { Bert } from "meteor/themeteorchef:bert";

class ProductsRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isUpdating: false };
  }

  handleSave(e) {
    e.preventDefault();
    const name = this.refs.productName.value;
    const description = this.refs.productDescription.value;
    const category = this.refs.productCategory.value;
    const price = Number(this.refs.productPrice.value);
    const image = $("#updateImage").get(0).files[0];

    this.props.productsUpdate(
      this.props.product._id,
      name,
      description,
      category,
      price,
      this.props.product.image_id,
      image
    );
    this.setState({ isUpdating: false });
    Bert.alert("Product updated", "success", "growl-top-right");
  }

  handleUpdate(e) {
    e.preventDefault();
    this.setState({ isUpdating: true });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.productsDelete(
      this.props.product._id,
      this.props.product.image_id
    );
    Bert.alert("Product deleted", "danger", "growl-top-right");
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({ isUpdating: false });
  }

  getName() {
    if (this.state.isUpdating) {
      return (
        <td>
          <input
            ref="productName"
            type="text"
            className="form-control"
            defaultValue={this.props.product.name}
          />
        </td>
      );
    }

    return <td>{this.props.product.name}</td>;
  }

  getDescription() {
    if (this.state.isUpdating) {
      return (
        <td>
          <textarea
            ref="productDescription"
            className="form-control"
            defaultValue={this.props.product.description}
          />
        </td>
      );
    }

    return <td>{this.props.product.description}</td>;
  }

  getCategory() {
    const categoryNames = this.props.categories.map(category => {
      return <option key={category._id}>{category.name}</option>;
    });

    if (this.state.isUpdating) {
      return (
        <td>
          <select ref="productCategory">{categoryNames}</select>
        </td>
      );
    }

    return <td>{this.props.product.category}</td>;
  }

  getImage() {
    if (this.state.isUpdating) {
      return (
        <td>
          <input id="updateImage" type="file" className="form-control" />
        </td>
      );
    }

    return (
      <td>
        <img
          src={this.props.product.image_url}
          style={{ maxWidth: 50, maxHeight: 50 }}
        />
      </td>
    );
  }

  getPrice() {
    if (this.state.isUpdating) {
      return (
        <td>
          <input
            ref="productPrice"
            type="text"
            className="form-control"
            defaultValue={this.props.product.price.toFixed(2)}
          />
        </td>
      );
    }

    return <td>$s {this.props.product.price.toFixed(2)}</td>;
  }

  getFirstButton() {
    if (this.state.isUpdating) {
      return (
        <td>
          <a href="#" onClick={this.handleSave.bind(this)}>
            Save
          </a>
        </td>
      );
    }

    return (
      <td>
        <a href="#" onClick={this.handleUpdate.bind(this)}>
          Update
        </a>
      </td>
    );
  }

  getSecondButton() {
    if (this.state.isUpdating) {
      return (
        <td>
          <a href="#" onClick={this.handleCancel.bind(this)}>
            Cancel
          </a>
        </td>
      );
    }

    return <td />;
  }

  getThirdButton() {
    if (this.state.isUpdating) {
      return <td />;
    }

    return (
      <td>
        <span
          onClick={this.handleDelete.bind(this)}
          className="glyphicon glyphicon-remove"
        />
      </td>
    );
  }

  render() {
    return (
      <tr>
        {this.getImage()}
        {this.getName()}
        {this.getDescription()}
        {this.getCategory()}
        {this.getPrice()}
        {this.getFirstButton()}
        {this.getSecondButton()}
        {this.getThirdButton()}
      </tr>
    );
  }
}

export default ProductsRow;
