import React, { useState } from "react";
import Data from "./Data";

const UseStateExample2 = () => {
  const initialstate = { firstName: "", lastName: "" };
  const [showCard, setShowCard] = useState(false);

  const [person, setPerson] = useState(initialstate);

  const Form = () => {
    const [errorForm, setErrorForm] = useState(initialstate);

    const onInputChange = (e, name) => {
      const val = e.target.value;
      console.log("Name", name);
      console.log("value", val);

      let _person = { ...person };
      //_person.firstName = val; //or _person["fristName"]
      // _person.lastName= val;
      //dynamic
      _person[`${name}`] = val;
      setPerson(_person);
    };

    const clickHandler = () => {
      let isValid = true;
      let _errorForm = {};
      if (person.firstName.length < 2) {
        _errorForm.firstName = "first name is not valid!";
        isValid = false;
      }

      if (person.lastName.length < 2) {
        _errorForm.lastName = "last name is not valid!";
        isValid = false;
      }

      if (isValid) {
        console.log("Person", person);
        setErrorForm(initialstate);
        setShowCard(true);
      } else {
        setErrorForm(_errorForm);
        setShowCard(false);
      }
    };
    return (
      <div>
        <form>
          <div className="mb-3">
            <input
              type="text"
              value={person.firstName}
              onChange={(e) => onInputChange(e, "firstName")}
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="enter your first name"
            />
            <span className="text-danger">{errorForm.firstName}</span>
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={person.lastName}
              onChange={(e) => onInputChange(e, "lastName")}
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="enter your last name"
            />
            <span className="text-danger">{errorForm.lastName}</span>
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={clickHandler}
            >
              Click me!
            </button>
          </div>
        </form>
        <br />
      </div>
    );
  };

  return (
    <div className="container mt-5">
      <Form />
      <Data
        showCard={showCard}
        firstName={person.firstName}
        lastName={person.lastName}
      />
    </div>
  );
};

export default UseStateExample2;
