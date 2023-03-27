import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
  useLocation,
  Redirect,
} from "react-router-dom";

const RouterDemo = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/form" component={Form} />
          <Redirect from="/add" to="/form" />
          <Route path="/error" component={ErrorComponent} />
          <Route path="/data/:id" component={Data} />
          <Route component={ComponentNotFound} />
        </Switch>
      </Router>
    </div>
  );
};
const Header = () => {
  return (
    <ul className="nav nav-pills nav-fill bg-dark text-whight">
      <li className="nav-item">
        <Link className="nav-link" to="/welcome">
          Welcome
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/home">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/form">
          Form
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
    </ul>
  );
};
const Welcome = () => {
  return (
    <div className="container">
      <h4>Welcome component! </h4>
    </div>
  );
};

const Home = () => {
  const history = useHistory();

  return (
    <div className="container mt-5">
      <h4>Home component! </h4>
      <br />
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => history.goBack()}
      >
        Back
      </button>

      <br />
      <button
        type="button"
        className="btn btn-info"
        onClick={() => history.push("/about")}
      >
        Go to About
      </button>
    </div>
  );
};
const About = () => {
  return (
    <div className="container">
      <h4>About component! </h4>
    </div>
  );
};
const ComponentNotFound = () => {
  return (
    <div className="container">
      <h4>Component not found! </h4>
    </div>
  );
};
const Form = () => {
  const history = useHistory();

  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  const ClickHandler = () => {
    const data = { id, name };
    history.push("/data/" + id, data);
  };
  return (
    <div className="container">
      <div className="row pt-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col">
          <button
            input
            type="button"
            className="btn btn-success"
            onClick={ClickHandler}
          >
            Click
          </button>
        </div>
      </div>
    </div>
  );
};
const Data = () => {
  const params = useParams();
  const locations = useLocation();
  const [id, setId] = useState(params.id);
  if (id == 0) {
    return (
      <Redirect
        to={{ pathname: "/error", state: { message: "param is not vaild" } }}
      />
    );
  }
  return (
    <div className="container">
      <p>Data Component Id:{params.id}</p>
      <p>
        {locations.state.id}-{locations.state.name}
      </p>
    </div>
  );
};
const ErrorComponent = () => {
  const locations = useLocation();
  return (
    <>
      error component!
      {locations.state.message && <b> {locations.state.message} </b>}
    </>
  );
};

export default RouterDemo;
