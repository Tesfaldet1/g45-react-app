import React from "react";
import Menu from "./Menu";
import Product from "./Product";
/**
 * @author
 * @function
 **/

const App = () => {
  const menus = [
    { id: 1, name: "Home", path: "/home", active: "active" },
    { id: 2, name: "Signin", path: "/login", active: "" },
    { id: 3, name: "Signup", path: "/Register", active: "" },
    { id: 4, name: "Products", path: "/products", active: "" },
    { id: 5, name: "About", path: "/about", active: "" },
  ];
  const productList = [
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
  return (
    <div className="container_fluid ">
      <Menu menuList={menus} />
      <br />
      <div className="container card-group ">
        <div className="row ">
          {productList.map((product) => {
            return <Product data={product} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
