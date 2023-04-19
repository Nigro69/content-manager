import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiAlertTriangle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Modal,Button } from "flowbite-react";
import { HiCheck } from "react-icons/hi";

function Invite() {

  const navigate = useNavigate();

  const [role, setrole] = useState("");
  const [confirmation, setconfirmation] = useState(false);
  const [email, setemail] = useState(null);
  const [department, setdepartment] = useState("");
  const [alert, setAlert] = useState(false);

    const handleConfirm = () => {
        handleInvite();
        setconfirmation(false);
      };
    
      function reset() {
        setemail("");
        setrole("");
        setdepartment("");
      }
    
      async function handleInvite() {
        try {
          const res = await axios.post(
            "https://bdmhrmnode.bigbros.link/api/v1/team/inviteteam",
            {
              email,
              role,
              platform: department,
            }
          );
          console.log(res.data);
          setAlert(true);
          console.log(alert);
        } catch (error) {
          console.log(error.message);
        }
      }

  return (
    <div className="px-14 py-6">
        {alert && (
        //   <Alert
        //     className="absolute top-0 flex items-center justify-between"
        //     status="success"
        //     variant='left-accent'
        //   >
        //       <AlertIcon />
        //       Invite sent succesfully to {email}
        //     <button
        //       onClick={() => {
        //         setAlert(false);
        //         reset();
        //       }}
        //     >
        //       <CloseIcon />
        //     </button>
        //   </Alert>
        <Modal show={alert} size="md" popup={true} onClose={()=>{setAlert(false); reset();}}>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiCheck className="animate-bounce mx-auto p-1 mb-4 h-14 w-14 rounded-full bg-green-300 text-gray-600 dark:text-gray-200" />
              <h3 className="tracking-widest font-bold mb-5 text-lg text-gray-600 dark:text-gray-400">
               Invite sent succesfully to {email}
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="success" onClick={()=>{setAlert(false); reset();}}>
                  Okay
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        )}
      <div className="flex justify-between place-items-center">
        <div>
          <div className="text-2xl  font-sans tracking-wider font-semibold">
            Add People to Collaborate
          </div>
          <div className="text-sm text-gray-400 p-2">
            Give people access to this site and assign them roles.
          </div>
        </div>
        <div className="flex gap-5 place-items-center">
          <button className="text-sm font-semibold text-gray-400 px-4 py-2 rounded-xl">
            Cancel
          </button>
          <button
            onClick={() => setconfirmation(true)}
            className="text-sm font-semibold px-4 py-2 text-gray-100 rounded-xl  bg-blue-500"
          >
            Send Invite
          </button>
        </div>
      </div>
      <div className="my-10">
        <div className="w-full">
          <div className=" font-semibold font-sans">
            Email <label className="text-[#BC312E]">*</label>
          </div>
          <div className="text-sm text-gray-400 pb-2 pt-1">
            Add email of a person you want to invite for a specific role.
          </div>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            className=" w-2/4 bg-gray-200  py-2 px-5 rounded-md"
            placeholder="name@example.com"
          />
        </div>
      </div>
      <div className="text-gray-400 font-sans tracking-wide font-semibold mt-10">
        Content Management System Roles
      </div>
      <div className="my-4  border rounded-md space-y-1 border-gray-400">
        <div className="flex rounded-t-md gap-6 place-items-center py-3 px-6 hover:bg-gray-200">
          <input
            type="checkbox"
            checked={role === "manager"}
            onChange={() => {
              setrole("manager");
              setdepartment("cms");
            }}
            className="rounded-md accent-[#BC312E]"
          />
          <div>
            <div className="text-lg font-semibold ">Manager</div>
            <div className="text-sm text-gray-400 py-1">
              Has access to release offer letter, schedule the interview,
              finalize and onboard the candidate{" "}
            </div>
          </div>
        </div>
        <div className="flex gap-6 place-items-center py-3 px-6 hover:bg-gray-200">
          <input
            type="checkbox"
            checked={role === "editor"}
            onChange={() => {
              setrole("editor");
              setdepartment("cms");
            }}
            className="rounded-md accent-[#BC312E]"
          />
          <div>
            <div className="text-lg font-semibold ">Editor</div>
            <div className="text-sm text-gray-400 py-1">
              Has access to release offer letter, schedule the interview,
              finalize and onboard the candidate{" "}
            </div>
          </div>
        </div>
        <div className="flex gap-6 place-items-center py-3 px-6 hover:bg-gray-200 rounded-b-md">
          <input
            type="checkbox"
            checked={role === "writer"}
            onChange={() => {
              setrole("writer");
              setdepartment("cms");
            }}
            className="rounded-md accent-[#BC312E]"
          />
          <div>
            <div className="text-lg font-semibold ">Writer</div>
            <div className="text-sm text-gray-400 py-1">
              Has access to release offer letter, schedule the interview,
              finalize and onboard the candidate{" "}
            </div>
          </div>
        </div>
        <div className="flex gap-6 place-items-center py-3 px-6 hover:bg-gray-200 rounded-b-md">
          <input
            type="checkbox"
            checked={role === "guest writer"}
            onChange={() => {
              setrole("guest writer");
              setdepartment("cms");
            }}
            className="rounded-md accent-[#BC312E]"
          />
          <div>
            <div className="text-lg font-semibold ">
              Guest Writer
            </div>
            <div className="text-sm text-gray-400 py-1">
              Has access to release offer letter, schedule the interview,
              finalize and onboard the candidate{" "}
            </div>
          </div>
        </div>
      </div>
      {confirmation && (
          <div className="absolute inset-0 bg-[#2B292C]/30 z-40 backdrop-blur-sm ">
            <div className="h-screen w-full grid place-items-center">
              <div className="rounded-md p-6 bg-[#211F22] w-1/4 mx-auto my-auto">
                <div className="grid place-items-center">
                  <FiAlertTriangle className="bg-[#BC312E] p-2 rounded-full h-20 w-20" />
                </div>
                <div className="text-gray-400 font-semibold text-2xl text-center">
                  Are you sure ?
                </div>
                <div className="text-gray-400 text-center font-semibold p-2">
                  You want to appoint{" "}
                  <label className="font-bold text-gray-200 text-lg underline underline-offset-2">
                    {" "}
                    {email}
                  </label>{" "}
                  to contribute as{" "}
                  <label className="font-bold text-gray-200 text-lg">
                    {role}
                  </label>
                  .
                </div>
                <div className="grid place-items-center my-4">
                  <div className="flex place-items-center gap-6">
                    <button
                      onClick={() => setconfirmation(false)}
                      className="text-sm font-semibold px-4 py-2 bg-[#2B292C] rounded-md text-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleConfirm}
                      className="text-sm font-semibold px-4 py-2 rounded-md bg-blue-500 text-gray-200"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default Invite;
