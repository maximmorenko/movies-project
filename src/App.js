import React from "react";
import Heder from "./Layout/Heder";
import Footer from "./Layout/Footer";
// import Main from "./Layout/Main";
import MainHooks from "./Layout/MainHooks";


function App() {
  return (
    <React.Fragment>
      <Heder/>
      {/* <Main/> */}
      <MainHooks/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
