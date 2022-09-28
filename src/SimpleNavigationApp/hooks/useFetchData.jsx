import React, { useEffect } from "react";

import axios from "axios";

const useFetchData = () => {
  useEffect(() => {
    // axios({
    //   method: "GET",
    //   url: "https://api.github.com/users",
    // })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://api.github.com/users", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  });
  return {};
};

export default useFetchData;
