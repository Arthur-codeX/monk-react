import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import axios from "axios";

const SinglePost = () => {
  const route = useParams();
  console.log(route);

  const [user, setUser] = useState({
    avatar_url: "",
    login: "",
  });

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.github.com/users/${route.id}`,
    })
      .then((data) => {
        console.log(data.data);
        setUser(data.data);
      })
      .catch((e) => {});
  }, []);

  return (
    <div className=" rounded-lg flex flex-col shadow-lg border-2 border-dotted">
      <img style={{ width: "100%" }} alt={"Some User"} src={user.avatar_url} />
      <div className=" text-black p-8 font-bold text-xl">{user.login}</div>
    </div>
  );
};

export default SinglePost;
