import ReactDOM from "react-dom";

import Navbar from "./components/Navbar/Navbar";
import HeroImage from "./containers/HeroSection/HeroImage.jsx";
import MainContent from "./containers/MainContent/MainContent.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Routes,
} from "react-router-dom";
import SideContent from "./containers/MainContent/SideContent.jsx";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <div className={`${isMainPage ? "bg-body-color" : "site-body"}`}>
      <div className={`${isMainPage ? "" : "bg-header-bar-color"}`}>
        <header className="header  mx-auto max-w-screen-lg min-w-screen-lg flex flex-col h-max bg-red">
          <Navbar isMainpage={isMainPage} />
        </header>
        {isMainPage && <HeroImage />}
      </div>
      <div className="mx-auto max-w-screen-lg min-w-screen-lg flex flex-col h-max bg-body">
        <div className={"flex-grow h-screen"}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/*" element={<SideContent />} />
          </Routes>
        </div>
      </div>
      <div className={"bg-footer-color"}>
        <Footer />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
