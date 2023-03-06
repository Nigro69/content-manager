import React, { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getRole, getToken, storeRole, storeToken } from "../LocalStorage";
import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { authToken, setauthToken,setAdmin,setmanager,seteditor,setguestWriter,setprofilePopup } = useStateContext();
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isPending, setisPending] = useState(false);
  const [erroeMessage, seterroeMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setisPending(true);
    logIn(email, password);
    setemail("");
    setpassword("");
  };

  const logIn = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      storeToken(res.user.accessToken);
      storeRole(res.user.displayName);
      seterroeMessage(false);
      setprofilePopup(false);
      const yash = getToken();
      setauthToken(yash);
      const barman=getRole();

      switch (barman) {
        case "admin":
          setAdmin(true);
          break;
        case "manager":
          setmanager(true);
          break;
        case "editor":
          seteditor(true);
          break;
        case "writer":
          setguestWriter(true);
          break;
      
        default:
          break;
      }

      navigate("/");
      setisPending(false);
    } catch (error) {
      console.log(error);
      seterroeMessage(true);
      setisPending(false);
    }
  };

  useEffect(() => {
    const yash = getToken();
    setauthToken(yash);
    const barman= getRole();
    switch (barman) {
      case "admin":
        setAdmin(true);
        break;
      case "manager":
        setmanager(true);
        break;
      case "editor":
        seteditor(true);
        break;
      case "writer":
        setguestWriter(true);
        break;
    
      default:
        break;
    }
  }, [authToken, setauthToken]);

  return (
    <div className="grid justify-center items-center h-screen bg-[#0e0e0e]">
      <div>
        {erroeMessage && (
          <div className="p-4 my-2 border border-red-300 rounded-md bg-[#FF3131] text-sm bg-opacity-40 text-white">
            Please check your Email and Password again.
          </div>
        )}
        <div className=" bg-gray-900 rounded-t p-6 ">
          <form className="w-96 space-y-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <p className="text-gray-400">Log In</p>
              <h2 className="text-xl font-bold text-white">
                Join our community
              </h2>
            </div>
            <div>
              <input
                className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            <div>
              {!isPending && (
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">
                  Log In
                </button>
              )}
              {isPending && (
                <button
                  disabled={true}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
                >
                  Loading...
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="bg-gray-900 px-6 py-2 flex justify-between text-white">
          <p>Don't have an account yet?</p>
          <button onClick={() => navigate("/signup")}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
