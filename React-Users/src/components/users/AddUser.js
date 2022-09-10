import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [todo, setUser] = useState({
    title: "",
    content: "",
  });

  const { title, content } = todo;
  const onInputChange = (e) => {
    setUser({ ...todo, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", title);
    form.append("content", content);

    axios
      .post("http://localhost:8000/api/store", form)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add ToDo</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter ToDo Title"
              name="title"
              value={title}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter ToDo"
              name="content"
              value={content}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add ToDo</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
