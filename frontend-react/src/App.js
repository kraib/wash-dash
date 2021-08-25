import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState } from "react";
function App() {
  const [name, setName] = useState();
  const [phonenumber, setPhonenumber] = useState();

  return (
    <div className="container">
      <h4>Wash and Dash</h4>
      <div className="row">
        <div className="col-md-7">
          <div className="col-sm-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Phonenumber</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setPhonenumber(e.target.value);
              }}
            ></input>
          </div>
          <hr />
          <button
            className="w-100 btn btn-primary btn-lg"
            type="submit"
            onClick={() => {
              axios
                .post("http://localhost:3001", { name, phonenumber })
                .then(function (response) {
                  // handle success
                  console.log(response);
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                })
                .then(function () {
                  // always executed
                });
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
