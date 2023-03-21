//import ReactDOM from "react-dom"; old version
import ReactDOM from "react-dom/client";
import AppClass from "./ex1-class/AppClass";
import AppFunction from "./ex2-function/AppFunction";
import AppArrowFunction from "./ex3-arrow-function/AppArrowFunction";
import Table from "./ex4-table/Table";
import StyleExample from "./ex5-css/StyleExample";
import Menu from "./ex7-props/Menu";

import "bootstrap/dist/css/bootstrap.css";
import NameList from "./ex6-var-function/NameList";
import App from "./ex7-props/App";
import Car from "./ex8-state/Car";
import ProductList from "./ex8-state/ProductList";
import Counter from "./ex9-event/Counter";
import Person from "./ex9-event/Porson";
import ComponentLifecycleDemo from "./ex10-component-lifecycle/ComponentLifecycleDemo";
import UseStateExample from "./ex10-component-lifecycle/UseStateExample";

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

const names = [
  "Fiory Weldemichea",
  "Tesfaldet Weldemicheal",
  "Sisay Weldemicheal",
];
root.render(<UseStateExample />);
