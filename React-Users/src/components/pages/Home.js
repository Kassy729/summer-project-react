import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8000/api/index");
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    const userList = users.filter((user) => user.id !== id);
    setUser(userList);

    await axios.delete(`http://localhost:8000/api/delete/${id}`);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>StudyNote</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">목표</th>
              <th scope="col">내용</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.title}</td>
                <td>{user.content}</td>
                <td>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    편집
                  </Link>
                  <button
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    완료
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
