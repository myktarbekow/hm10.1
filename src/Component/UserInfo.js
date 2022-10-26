import React from "react";
import { useEffect } from "react";
import "../Component/UserInfo.css";

function UserInfo() {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?limit=10"
      );
      const result = await response.json();
      setUsers(result.splice(0, 10));
      console.log(result);
    };
    getUsers();
  }, [setUsers]);
  return (
    <div className="container">
      {users.map((el, index) => {
        return (
          <div className="userInfo" key={index}>
            <div className="firstItem">
              <p className="title">title here</p>
              <p className="userId">{el.id}</p>
            </div>
            <p className="text">{el.title}</p>
            <img className="userUrl" src={el.url} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default UserInfo;
