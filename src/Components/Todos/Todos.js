import React, { useState, useEffect } from "react";


import "./Todos.css";

const Todos = (props) => {
  const [query, setQuery] = useState();
  const [filterdata, setFilterdata] = useState([]);
  const [records, setRecords] = useState([]);
  const [modeldata, setModeldata] = useState({
    userId: "",
    id: "",
    title: "",
    completed: "",
    Name: "",
    Email: "",
  });

  const getuser = async () => {
    const reqdata = await fetch(`http://localhost:3000/Users`);
    const resdata = await reqdata.json();
    setRecords(resdata);
    // .then((response) => response.json())
    // .then((res) => setRecords(res));
    setFilterdata(resdata);
  };
  useEffect(() => {
    getuser();
  }, []);

  const showUser = (id) => {
    fetch(`http://localhost:3000/Users/${id}`)
      .then((response) => response.json())
      .then((res) => setModeldata(res));
  };

  const handlesearch = (event) => {
    const getsearch = event.target.value;

    if (getsearch.length > 0) {
      const searchdata = records.filter(
        (item) =>
          item.title.toLowerCase().includes(getsearch)
      );
      setRecords(searchdata);
    } else {
      setRecords(filterdata);
    }
    setQuery(getsearch);
  };




  return (
    <div class="container mt">
      <div className="tab1">
        <p className="h">Todos</p>

        <input
          placeholder="Search"
          className="inp"
          type="search"
          value={query}
          onChange={(e) => handlesearch(e)}
        ></input>
        <table class="table tab">
          <thead>
            <tr>
              <th className="th">ID</th>
              <th className="th">Name</th>
              <th className="th">Status</th>
              <th className="th">Button</th>
            </tr>
          </thead>
          <tbody>
            {records.map((users, index) => (
              <tr key={index}>
                <td>{users.id}</td>
                <td>{users.title}</td>
                {users.completed ? <td>completed</td> : <td>Incompleted</td>}
                <td>
                  <button
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#myModal"
                    onClick={(e) => showUser(users.id)}
                  >
                    View user
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="modal" id="myModal">
        <div
          class="modal-dialog"
          style={{ width: "700px", marginRight: "60px", marginTop: "150px" }}
        >
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Row No : {modeldata.id}</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <table class="table">
                <tbody>
                  <tr>
                   <li>UserId: {modeldata.userId}</li>
                   <li>Title: {modeldata.title}</li>
                   <li>Name: {modeldata.Name}</li>
                   <li>Email: {modeldata.Email}</li>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
