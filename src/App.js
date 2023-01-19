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
import { useStateContext } from "./contexts/ContextProvider";
import Permissions from "./pages/Permissions";
import Roles from "./pages/Roles";
import NewPost from "./pages/NewPost";
import Payments from "./pages/Payments";
import Invoices from "./pages/Invoices";
import Reports from "./pages/Reports";
import NewCategory from "./pages/NewCategory";
import WriterProfile from "./pages/WriterProfile";
import ManageBlog from "./pages/ManageBlog";
import WriterInfo from "./pages/WriterInfo";

function App() {
  const { activeMenu, guestWriter, admin, editor,manager } = useStateContext();

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
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-60 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg ml-16 w-full min-h-screen flex-2 "
            }
          >
            {(admin) && (
              <Routes>
                <Route path="/dashboard" element={<Home />} />
                <Route path="/dashboard/post" element={<NewPost />} />
                <Route path="/posts/post" element={<NewPost />} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/site" element={<Site />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/manage-blog" element={<ManageBlog />} />
                <Route path="/catagories" element={<Catagories />} />
                <Route path="/catagories/new-category" element={<NewCategory />} />
                <Route path="/writers" element={<Writers />} />
                <Route path="/writers/writer-info" element={<WriterInfo />} />
                <Route path="/writers/new-profile" element={<WriterProfile />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/setting/permissions" element={<Permissions />} />
                <Route path="/setting/permissions/roles" element={<Roles />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/reports" element={<Reports />} />
              </Routes>
            )}
            {(manager) && (
              <Routes>
                <Route path="/dashboard" element={<Home />} />
                <Route path="/dashboard/post" element={<NewPost />} />
                <Route path="/manage-blog" element={<ManageBlog />} />
                <Route path="/posts/post" element={<NewPost />} />
                <Route path="/site" element={<Site />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/catagories" element={<Catagories />} />
                <Route path="/catagories/new-category" element={<NewCategory />} />
                <Route path="/writers" element={<Writers />} />
                <Route path="/writers/writer-info" element={<WriterInfo />} />
                <Route path="/writers/new-profile" element={<WriterProfile />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/setting" element={<Setting />} />
              </Routes>
            )}

            {guestWriter && (
              <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/post" element={<NewPost />} />
                <Route path="/posts/post" element={<NewPost />} />
              </Routes>
            )}

            {editor && (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Home />} />
                <Route path="/dashboard/post" element={<NewPost />} />
                <Route path="/post" element={<NewPost />} />
                <Route path="/posts/post" element={<NewPost />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/catagories" element={<Catagories />} />
                <Route path="/writers/writer-info" element={<WriterInfo />} />
                <Route path="/writers" element={<Writers />} />
                <Route path="/writers/new-profile" element={<WriterProfile />} />
              </Routes>
            )}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
