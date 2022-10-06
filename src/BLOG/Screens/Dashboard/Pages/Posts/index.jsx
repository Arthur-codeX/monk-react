import React, { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router";

const Posts = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.github.com/users",
    })
      .then((data) => {
        setUsers(data.data);
      })
      .catch((e) => {});
  }, []);

  return (
    <div className="flex flex-row flex-wrap  gap-x-8 gap-y-8  ">
      {users.map((user, i) => {
        console.log(user);
        return (
          <div
            key={i}
            onClick={() => navigate(`/dashboard/post/${user.id}`)}
            className=" rounded-lg flex flex-col shadow-lg border-2 border-dotted"
          >
            <img style={{ width: "100%" }} src={user.avatar_url} />
            <div className=" text-black p-8 font-bold text-xl">
              {user.login}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
