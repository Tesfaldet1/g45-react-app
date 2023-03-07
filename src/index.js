//import ReactDOM from "react-dom"; old version
import ReactDOM from "react-dom/client";
import AppClass from "./ex1-class/AppClass";
import AppFunction from "./ex2-function/AppFunction";
import AppArrowFunction from "./ex3-arrow-function/AppArrowFunction";
import Table from "./ex4-table/Table";
import StyleExample from "./ex5-css/StyleExample";

import "bootstrap/dist/css/bootstrap.css";

const greetingMessage = <div>hello react!</div>;

const menu = (
  <ul>
    <li>Home</li>
    <li>contact oss</li>
    <li>login</li>
  </ul>
);
console.log("<<<< hello java");
//ReactDOM.render(menu, document.getElementById("root")); old version

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StyleExample />);
