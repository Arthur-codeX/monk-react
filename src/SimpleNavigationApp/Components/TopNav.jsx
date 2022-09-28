import React from "react";

import useNavigation from "../hooks/useNavigation";
import useFetchData from "../hooks/useFetchData";

// const TopNav = ({ page, setPage }) => {
//   return (
//     <div style={{ display: "flex" }}>
//       <h4
//         onClick={() => setPage("Home")}
//         style={{
//           margin: "10px",
//           backgroundColor: page === "Home" ? "green" : "",
//         }}
//       >
//         Home
//       </h4>
//       <h4
//         onClick={() => setPage("About")}
//         style={{
//           margin: "10px",
//           backgroundColor: page === "About" ? "green" : "",
//         }}
//       >
//         About
//       </h4>
//       <h4
//         onClick={() => setPage("ContactUs")}
//         style={{
//           margin: "10px",
//           backgroundColor: page === "ContactUs" ? "green" : "",
//         }}
//       >
//         Contact Us
//       </h4>
//     </div>
//   );
// };

const TopNav = ({ page, setPage }) => {
  const [toHome, toAbout, toContact] = useNavigation(setPage);
  const {} = useFetchData();
  return (
    <div style={{ display: "flex" }}>
      <h4
        onClick={toHome}
        style={{
          margin: "10px",
          backgroundColor: page === "Home" ? "green" : "",
        }}
      >
        Home
      </h4>
      <h4
        onClick={toAbout}
        style={{
          margin: "10px",
          backgroundColor: page === "About" ? "green" : "",
        }}
      >
        About
      </h4>
      <h4
        onClick={toContact}
        style={{
          margin: "10px",
          backgroundColor: page === "ContactUs" ? "green" : "",
        }}
      >
        Contact Us
      </h4>
    </div>
  );
};

export default TopNav;
