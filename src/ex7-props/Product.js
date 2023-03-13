import React from "react";
/**
 * @author Tesfaldet Weldemicheal
 * @function @ Product
 **/

const Product = (props) => {
  const { title, description, price, picture_url } = props.data;
  return (
    <div className="col-md-4 ">
      <div className="Card p-3 mb-2">
        <img
          src={props.data.picture_url}
          alt="test"
          className="card-img-top "
        />

        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          <h5>{price}</h5>
        </div>
        <div className="card-footer d-grid">
          <button className="btn btn-primary">Add To List</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
