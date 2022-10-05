import React, { useState, useEffect } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const [isErrorName, setIsErrorName] = useState(false);
  const [errorMessage, setErrorMessage] = useState("* input required");
  const [password, setPassword] = useState("");

  function handleNameChange(e = "") {
    setName((current) => e.target.value);
    //setName(e.target.value);
  }

  function handleNameblur(param1, param2) {
    console.log(param1);
    console.log(param2);
    console.log("Name blur");
    if (name === "") {
      setIsErrorName(true);
      setErrorMessage("* Input Required ");
      return;
    }
    if (name.length < 4) {
      setIsErrorName(true);
      setErrorMessage(`Minimum Characters must be: 4`);
      return;
    }

    setIsErrorName(false);
  }

  console.log("Comtrolled  Component Rendered");

  return (
    <div>
      <p>
        <input
          // onChange={handleNameChange}
          onChange={(e) => handleNameChange(e)}
          onBlur={handleNameblur}
          value={name}
          type="Text"
          style={{ backgroundColor: isErrorName ? "rgba(255,0,0,0.2)" : "" }}
        />
        <label>:Enter name</label>
      </p>
      {isErrorName ? <p>{errorMessage}</p> : null}
      <p>
        <input type="Password" value={password} />
        <label>:Enter password</label>
      </p>
      <p>
        <button>Submit</button>
      </p>
    </div>
  );
};

export default Controlled;
