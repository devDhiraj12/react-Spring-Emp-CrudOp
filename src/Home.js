import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [Employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/list")
      .then((response) => response.data)
      .then((res) => {
        // console.log(res);
        setEmployee(res);
      });
  }, []);

  const LoadEdit = (id) => {
    axios
      .get("http://localhost:8080/edit/" + id)
      .then((response) => response.data)
      .then((resp) => {
        navigate(`/edit`, { state: resp });
      });
  };
  const LoadDelete = (id) => {
    axios
      .get("http://localhost:8080/delete/" + id)
      .then((response) => response.data)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <div className="container m-16  ">
        <div className="container my-5  ">
          <p className="my-5">
            <a href="/addEmp" className="btn btn-primary">
              <i className="fas fa-user-plus ml-2"> Add Employee </i>
            </a>
          </p>
          <div className="col-md-11  ">
            <div>
              <table className="table table-striped table-responsive-md">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {Employee.map((emp, index) => (
                    <tr key={emp.id}>
                      <td>{emp.firstName}</td>
                      <td>{emp.lastName}</td>
                      <td>{emp.email}</td>
                      <td>
                        <a
                          onClick={() => {
                            LoadEdit(emp.id);
                          }}
                          className="btn btn-success"
                        >
                          <i className="fas fa-user-edit ml-2"></i>
                        </a>
                      </td>
                      <td>
                        <a
                          onClick={() => {
                            LoadDelete(emp.id);
                          }}
                          className="btn btn-danger"
                        >
                          <i className="fas fa-user-times ml-2"></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
