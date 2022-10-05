import React, { useRef } from "react";

const Unctrolled = () => {
  const name = useRef();
  console.log("Uncontrolled Component Rendered");

  function handleSubmit() {
    console.log(name.current.value);
    if (name.current.value === "") {
      alert("Name cant be empty");
      return;
    }
  }

  return (
    <div>
      <p>
        <input ref={name} />
        <label>:Enter name</label>
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
    </div>
  );
};

export default Unctrolled;
