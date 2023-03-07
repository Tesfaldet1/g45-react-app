import React from "react";
import ContentClass from "./ContentClass";
import FooterClass from "./FooterClass";
import HeaderClass from "./HeaderClass";

class AppClass extends React.Component {
  render() {
    return (
      <div>
        <HeaderClass />
        <ContentClass />
        <hr />
        <FooterClass />
      </div>
    );
  }
}

export default AppClass;
