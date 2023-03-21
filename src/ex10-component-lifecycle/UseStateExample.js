import React from "react";

const UseStateExample = () => {
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="fristName"
            placeholder="enter yor first name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="enter yor last name"
          />
        </div>
      </form>
    </div>
  );
};
export default UseStateExample;
