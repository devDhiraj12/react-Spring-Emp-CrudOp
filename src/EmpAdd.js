import axios from "axios";
import { useEffect, useState } from "react";
import { Link, json, useLocation, useNavigate, useParams } from "react-router-dom";

const EmpAdd = () => {
  // const {Emp} = useParams();
  const location=useLocation()
//   console.log(location.state)


  const [id, idchange] = useState();
  const [firstName, firstNamechange] = useState();
  const [email, emailchange] = useState();
  const [lastName, lastNamechange] = useState();

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { id, firstName, email, lastName };
    console.log(empdata);

    axios
      .post("http://localhost:8080/createEmployee", empdata)
      .then((response) => response.data)
      .then((res) => {
        console.log(res);
        console.log(empdata);
        navigate("/");
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Employee add</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        // value={location.state.id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>firstName</label>
                      <input type="text"
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
                      <input type="text"
                        // value={location.state.lastName}
                        onChange={(e) => lastNamechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="text"
                        // value={location.state.email}
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button type="submit">Save</button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {JSON.stringify(location.state)}
    </div>
  );
};

export default EmpAdd;


//   basss xzaaaaallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll