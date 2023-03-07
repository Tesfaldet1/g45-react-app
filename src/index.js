//import ReactDOM from "react-dom"; old version
import ReactDOM from "react-dom/client";
import AppClass from "./ex1-class/AppClass";

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
root.render(<AppClass />);
