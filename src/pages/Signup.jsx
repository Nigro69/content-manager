import React, { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { getRole, getToken, storeRole, storeToken } from "../LocalStorage";

const Signup = () => {
  const navigate = useNavigate();
  const { authToken, setauthToken,setAdmin,setmanager,seteditor,setguestWriter,setprofilePopup } = useStateContext();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const [success, setsuccess] = useState(false);
  const [isPending, setisPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setisPending(true);
    const data = { username, email, password };
    console.log(data);
    // getMyResult(username, email, password);
    signUp(email, password, username);
    setemail("");
    setpassword("");
    setusername("");
  };

  const signUp = async (email, password, username) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      await updateProfile(auth.currentUser, { displayName: username });
      setsuccess(true);
      storeToken(res.user.accessToken);
      storeRole(res.user.displayName);
      seterrorMessage(false);
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
          setprofilePopup(true);
          break;
      
        default:
          break;
      }

      navigate("/");
      setisPending(false);
      seterrorMessage("");
      setisPending(false);
    } catch (error) {
      console.log(error.message);
      const message = error.message;
      setisPending(false);
      seterrorMessage(message.slice(9));
    }
  };

  return (
    <div className="grid justify-center items-center h-screen bg-[#0e0e0e]">
      <div>
        {success && (
          <div className="p-4 my-2 border border-green-300 rounded-md bg-green-800 text-sm bg-opacity-40 text-white">
            You successfully register yourself.
          </div>
        )}
        {errorMessage && (
          <div className="p-4 my-2 border border-red-300 rounded-md bg-[#FF3131] text-sm bg-opacity-40 text-white">
            {errorMessage}
          </div>
        )}

        <div className="bg-gray-900 rounded-t p-6">
          <form className="w-96 space-y-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <p className="text-gray-400">Sign Up</p>
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
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            <div className="flex p-3 justify-between border border-gray-700">
              <div className="flex gap-2 place-items-center">
                <input
                type="checkbox"
                className="rounded-full"
                checked={username === "admin"}
                onChange={() => setusername("admin")} />
                <p className="text-sm font-semibold tracking-widest p-1 text-gray-300">Admin</p>
              </div>
              <div className="flex gap-2 place-items-center">
                <input
                 type="checkbox" 
                 className="rounded-full" 
                 checked={username === "manager"}
                 onChange={() => setusername("manager")}/>
                <p className="text-sm font-semibold tracking-widest p-1 text-gray-300">Manager</p>
              </div>
              <div className="flex gap-2 place-items-center">
                <input 
                type="checkbox" 
                className="rounded-full" 
                checked={username === "editor"}
                onChange={() => setusername("editor")}/>
                <p className="text-sm font-semibold tracking-widest p-1 text-gray-300">Editor</p>
              </div>
              <div className="flex gap-2 place-items-center">
                <input 
                type="checkbox" 
                className="rounded-full" 
                checked={username === "writer"}
                onChange={() => setusername("writer")}/>
                <p className="text-sm font-semibold tracking-widest p-1 text-gray-300">Writer</p>
              </div>
            </div>
            <div>
              {!isPending && (
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">
                  Sign Up
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
          <p>Already have an account.</p>
          <button onClick={() => navigate("/")}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
