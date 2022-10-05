const useNavigation = (setPage) => {
  function toHome() {
    console.log("Settings home page");
    setPage("Home");
  }
  function toAbout() {
    console.log("Settings about page");
    setPage("About");
  }
  function toContact() {
    console.log("Settings contact page");
    setPage("ContactUs");
  }

  //   return {
  //     toHome: toHome,
  //     toAbout: toAbout,
  //     toContact: toContact,
  //   };
  return [toHome, toAbout, toContact];
};

export default useNavigation;
