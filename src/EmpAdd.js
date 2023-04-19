import axios from "axios";
import { useEffect, useState } from "react";
import {
  Link,
  json,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const EmpAdd = () => {
  // const {Emp} = useParams();
  const location = useLocation();
  //   console.log(location.state)

  const [id, idchange] = useState();
  const [firstName, firstNamechange] = useState();
  const [email, emailchange] = useState();
  const [lastName, lastNamechange] = useState();

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { id, firstName, email, lastName };

    axios
      .post("http://localhost:8080/createEmployee", empdata)
      .then((response) => response.data)
      .then((res) => {
        navigate("/");
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card mt-20" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 className="text-2xl font-semibold mt-4 ml-6">
                  Add Employee{" "}
                </h2>
              </div>
              <div className="card-body ">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="hidden"
                        // value={location.state.id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>firstName</label>
                      <input
                        type="text"
                        required
                        // value={location.state.firstName}
                        onChange={(e) => firstNamechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>lastname</label>
                      <input
                        type="text"
                        required
                        // value={location.state.lastName}
                        onChange={(e) => lastNamechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        required
                        // value={location.state.email}
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="px-4 rounded-lg text-white bg-blue-500 p-1 m-8 mb-0 "
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpAdd;
