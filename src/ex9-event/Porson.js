import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import "./Message";
import Message from "./Message";

const Person = () => {
  ///const [firstName, setFirstName] = useState("");
  //const [lastName, setlastName] = useState("");
  //const [email, setemail] = useState("");

  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [showMsessage, setShowMessage] = useState({ type: "", message: "" });

  const [showData, setShowData] = useState(false);

  const changeFirstName = (e) => {
    const value = e.target.value;
    console.log("value: ", value);
    setPerson({ ...person, firstName: value });
    // setFirstName(value);
  };
  const changeLastName = (e) => {
    const value = e.target.value;
    console.log("value: ", value);
    setPerson({ ...person, lastName: value });
    // setlastName(value);
  };

  const changeEmail = (e) => {
    const value = e.target.value;
    console.log("value: ", value);
    setPerson({ ...person, email: value });
    // setemail(value);
  };

  const clickBtn = () => {
    if (person.firstName.length > 2 && person.lastName.length > 2) {
      console.log("the operation is done sussfully ", person);
      setShowMessage({ type: "success", message: "operation is done" });
      setShowData(true);
    } else {
      setShowMessage({ type: "danger", message: "opeartion is failed" });
      setShowData(false);
    }
  };
  return (
    <div className="container">
      {showMsessage && (
        <Message message={showMsessage.message} type={showMsessage.type} />
      )}

      <div className="card">
        <div className="card-header bg-info text-white">Form</div>
        <div className="card-body ">
          <form className="form-control">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={person.firstName}
                onChange={changeFirstName}
                name="firstName"
                placeholder="Enter a First Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastNmae"
                value={person.lastName}
                onChange={changeLastName}
                placeholder="Enter a Last Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={person.mail}
                onChange={changeEmail}
                placeholder="Enter your Email"
              />
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={clickBtn}
            >
              Click me
            </button>
          </form>
        </div>
        <div className="card-footer"></div>
      </div>

      {showData && (
        <>
          <br />
          <hr />
          <br />
          <div className="card">
            <div className="card-header bg-dark text-white">Data</div>
            <div className="card-body">
              <div className="bm-3">
                <span>Last Name: {person.lastName}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Person;
