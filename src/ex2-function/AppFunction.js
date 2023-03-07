import React from "react";
//rsf

function Header() {
  return <>Header</>;
}
function Content() {
  return (
    <>
      Content: <br />
      <Welcame name="client" message="Welcame to my wesite" />
      <br />
      <Welcame name="gentalemen " message="Welcame to my wesite" />
    </>
  );
}

function Footer() {
  return <>Footer</>;
}

function Welcame(props) {
  return (
    <div>
      Hej {props.name}, {props.message}
    </div>
  );
}
function AppFunction() {
  return (
    <>
      <Header />
      <br />
      <Content />
      <br />
      <Footer />
    </>
  );
}
export default AppFunction;
