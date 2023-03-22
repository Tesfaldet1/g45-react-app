import React from "react";

import { useForm } from "react-hook-form";

const HookFormDemo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const saveData = (data) => {
    console.log("DATA: ", data);
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit(saveData)}>
        <div className="mb-3">
          <input
            type="text"
            {...register("firstName", { required: true, maxLength: 20 })}
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="enter your first name"
          />
          {errors.firstName && errors.firstName.type === "required" && (
            <span className="text-danger">first Name is required! </span>
          )}
          {errors.firstName && errors.firstName.type === "maxLength" && (
            <span className="text-danger"> max lenght is 20! </span>
          )}
        </div>
        <div className="mb-3">
          <input
            type="text"
            {...register("lastName", { required: true, maxLength: 20 })}
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="enter your last name"
          />
          {errors.lastName && errors.lastName.type === "required" && (
            <span className="text-danger">last Name is required! </span>
          )}
          {errors.lastName && errors.lastName.type === "maxLength" && (
            <span className="text-danger"> max lenght is 20 </span>
          )}
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Click me!
          </button>
        </div>
      </form>
    </div>
  );
};
export default HookFormDemo;
