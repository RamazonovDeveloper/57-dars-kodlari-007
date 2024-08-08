import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import axios from "axios";

function UsersList() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setUserData(res?.users);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = () => {
    const newTodo = {
      todo: "Use DummyJSON in the project",
      completed: false,
      userId: 5,
    };

    axios
      .post("https://dummyjson.com/todos/add", (newTodo))
      .then((res) => {
        console.log(res)
      });

  };

  return (
    <div>
      {loading ? <BarLoader color="red" /> : "User list component"}
      <button onClick={handleClick}>Send</button>
    </div>
  );
}

export default UsersList;
