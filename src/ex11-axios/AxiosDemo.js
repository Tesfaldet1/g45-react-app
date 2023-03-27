import React, { useState } from "react";
import axios from "axios";
import Message from "./Message";

const AxiosDemo = () => {
  const [peopple, setPeople] = useState([]);
  const [person, setPerson] = useState();
  const [selectedId, setSelectedId] = useState(1);

  const [alert, setAlert] = useState({ type: "", message: "" });

  const API_URL = "http://localhost:8080/api/v1/person";
  const getRequestAction = async () => {
    console.log("### start");
    await axios
      .get(API_URL)
      .then((response) => {
        console.log("Response:", response);
        if (response.status === 200) {
          setPeople(response.data);
          setAlert({ type: "success", message: "Get operation is done" });
        } else {
          setAlert({ type: "warning", message: "Display API error message" });
        }
      })
      .catch((error) => {
        console.log("ERROR:", error);
        setAlert({ type: "danger", message: "network error" });
      });
    console.log("### end");
  };
  const getRequestByIdAction = async () => {
    console.log("### start");
    await axios
      .get(API_URL + "/" + selectedId)
      .then((response) => {
        console.log("Response:", response);
        if (response.status === 201) {
          setPerson(response.data);
          setAlert({
            type: "success",
            message: "Get By Id operation is done!",
          });
        } else {
          setAlert({ type: "warning", message: "Display API error message" });
        }
      })
      .catch((error) => {
        console.log("ERROR:", error);
        setAlert({
          type: "danger",
          message: "get by id operation is not working",
        });
      });
    console.log("### end");
  };
  const postRequestAction = async () => {
    const newStudent = {
      firstName: "nuna",
      lastName: "Weldemichela",
      email: "nuna@gmail.com",
      title: "student",
    };
    await axios
      .post(API_URL, newStudent)
      .then((response) => {
        if (response.status === 201) {
          setPerson(response.data);
          setAlert({
            type: "success",
            message: "post operation is done! " + person.id,
          });
        } else {
          setAlert({ type: "warning", message: "Display API error message" });
        }
      })
      .catch((error) => {
        setAlert({
          type: "danger",
          message: "post operation is not working",
        });
      });
  };

  const puttRequestAction = async () => {
    const newStudent = {
      id: 1,
      firstName: "bob",
      lastName: "Weldemichela",
      email: "bob@gmail.com",
      title: "student",
    };
    await axios
      .put(API_URL, newStudent)
      .then((response) => {
        if (response.status === 204) {
          setAlert({
            type: "success",
            message: "put operation is done! ",
          });
        } else {
          setAlert({ type: "warning", message: "Display API error message" });
        }
      })
      .catch((error) => {
        setAlert({
          type: "danger",
          message: "put operation is not working",
        });
      });
  };

  return (
    <div className="container pt-5">
      <h3>Axios Demo</h3>
      <Message message={alert.message} type={alert.type} />
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-info"
            onClick={getRequestAction}
          >
            Get
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            onClick={getRequestByIdAction}
          >
            GetById
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-success"
            onClick={postRequestAction}
          >
            Post
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-warning"
            onClick={puttRequestAction}
          >
            Put
          </button>
        </div>
      </div>
    </div>
  );
};
export default AxiosDemo;
