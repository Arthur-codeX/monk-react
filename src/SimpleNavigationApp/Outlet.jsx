import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";

//custom hooks
// Passing by ref and passing by value

const Outlet = ({ page }) => {
  if (page === "Home") {
    return <Home />;
  }
  if (page === "About") {
    return <About />;
  }
  if (page === "ContactUs") {
    return <ContactUs />;
  }
  return <h1>Error 404. Page not Found</h1>;
};

export default Outlet;
