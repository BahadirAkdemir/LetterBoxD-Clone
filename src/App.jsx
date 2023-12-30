import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar/Navbar";
import HeroImage from "./containers/HeroSection/HeroImage.jsx";
import MainContent from "./containers/MainContent/MainContent.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className={"bg-body"}>
      <div className="mx-auto max-w-screen-lg min-w-screen-lg flex flex-col h-screen bg-body">
        <div className={"flex-grow"}>
          <HeroImage />
          <header className="header">
            <Navbar />
          </header>
          <MainContent />
        </div>
      </div>
      <div className={"bg-footer"}>
        <Footer />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
