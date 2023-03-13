import React, { useEffect, useState } from "react";
import Product from "../ex7-props/Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const responseData = [
      {
        title: "ROLLEIFLEX Camera",
        description: "None FUnction Camera",
        price: 1000,
        picture_url:
          "https://images.pexels.com/photos/821738/pexels-photo-821738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        title: "Camera Lens",
        description: "Nikon Camera",
        price: 3000,
        picture_url:
          "https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        title: "Watch",
        description: "smart watch",
        price: 5000,
        picture_url:
          "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ];
    //api  -get product from the backend
    setProducts(responseData);
  }, []);

  return (
    <div className="container card-group">
      <div className="row">
        {products.map((product) => {
          return <Product data={product} />;
        })}
      </div>
    </div>
  );
};
export default ProductList;
