import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Site from "./pages/Site";
import Overview from "./pages/Overview";
import Posts from "./pages/Posts";
import Catagories from "./pages/Catagories";
import Writers from "./pages/Writers";
import Setting from "./pages/Setting";
import { useStateContext } from './contexts/ContextProvider';
import Permissions from "./pages/Permissions";

function App() {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  return (
    <div className="App ">
      <BrowserRouter>
        <div className="flex relative">
          {activeMenu ? (
            <div className="w-60 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-16 fixed dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-60 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg ml-16 w-full min-h-screen flex-2 '
            }
          >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/site" element={<Site />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/catagories" element={<Catagories />} />
            <Route path="/writers" element={<Writers />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/setting/permissions" element={<Permissions />} />
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
