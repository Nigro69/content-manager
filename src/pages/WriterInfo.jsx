import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Chart } from "react-google-charts";
import { writerData } from "../data/dummy";
import { AiFillEye } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Modal } from "flowbite-react";
import axios from '../axios'

const WriterInfo = () => {

  const navigate = useNavigate();

  const seeBlog=(id)=>{
    navigate('/dashboard/detailed-blog', {state:{id:id}});
  }

  const date= new Date().toLocaleDateString("de-DE");

  const location = useLocation();
  useEffect(() => {
    console.log(location.state.id);
  }, [location]);

  const [postsData, setpostsData] = useState([])
  const [tasksData, settasksData] = useState([]);

  const getmyResult = async () => {
    try {
      const res = await axios.get("/blogs/");
      let array= res.data
      let resArray=[];
      { array.map((itr)=>(
        (itr.host === location.state.id  &&  resArray.push(itr))
      ))}
      console.log(postsData);
      setpostsData(resArray);
    } catch (error) {
      console.log(error.message);
    }
  };
  const gettasksResult = async () => {
    try {
      const res = await axios.get("/tasks/");
      let array= res.data
      let resArray=[
        [
          { type: "string", label: "Task ID" },
          { type: "string", label: "Task Name" },
          { type: "string", label: "Description" },
          { type: "date", label: "Start Date" },
          { type: "date", label: "End Date" },
          { type: "number", label: "Duration" },
          { type: "number", label: "Percent Complete" },
          { type: "string", label: "Dependencies" },
        ]
      ];
      { array.map((itr)=>{
        {itr.writer === location.state.id && resArray.push(
          [
            itr.id,
            itr.name,
            itr.description,
            new Date(itr.start_date),
            new Date(itr.end_date),
            null,
            itr.completed?100:0,
            null,
          ]
        )}
      })}
      console.log(resArray);
      settasksData(resArray);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getmyResult();
    gettasksResult();
  }, [])
  

  const [openTab, setOpenTab] = useState(1);
  const [newTask, setnewTask] = useState(false);
  const [name, setname] = useState("")
  const [description, setdescription] = useState("")
  const [end_date, setend_date] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,description,end_date,date)
    getMyResult(name,description,date,end_date);
    setname("");
    setdescription("")
    setend_date("");
    setnewTask(false)
  }; 

  const getMyResult = async (name,description,start_date,end_date) => {
    try {
      const res = await axios.post("/tasks/",{
        "name": name,
        "description": description,
        "start_date": start_date,
        "end_date": end_date,
        "completed": false,
        "writer": location.state.id
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const tasksOptions = {
    height: 400,
    gantt: {
      trackHeight: 30,
    },
  };

  const performanceData = writerData[location.state.id - 1].performanceData;

  const performanceOptions = {
    animation: {
      startup: true,
      duration: 1000,
      easing: "out",
    },

    chartArea: {
      backgroundColor: "#979797",
    },
    backgroundColor: "#F7F7F7",
    hAxis: {
      title: "Month",
    },
    vAxis: {
      title: "Performance",
    },
    curveType: "function",
  };

  const columnsofposts = [
    {
      name: "Blog ID",
      selector: (row) => row.id,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Publish Date",
      selector: (row) => row.created.slice(0,9),
    },
    {
      name: "",
      selector: (row) => (
        <AiFillEye onClick={()=>seeBlog(row.id)} className="h-10 w-10 text-gray-500 p-2 rounded-full cursor-pointer hover:bg-bg-gray-300 hover:text-gray-700" />
      ),
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        backgroundColor: "#979797",
        fontWeight: "bold",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  return (
    <div className="bg-gray-200 w-full h-full p-8">
      <div className="w-full bg-[#F7F7F7] rounded-t-lg p-8 border-b">
        <div className="flex relative">
          <div className="absolute border border-gray-300 rounded-full h-[208px] w-[208px] ml-10 animate-ping" />
          <div className="absolute border border-gray-900 rounded-full h-[120px] w-[120px] left-[84px] top-[44px] animate-ping" />
          <div className="z-10 mx-10 rounded-full bg-[#979797] h-52 w-52 p-2 text-9xl grid place-items-center text-[#323643]">
            {location.state.name.charAt(0)}
          </div>
          <div className="mt-5 mx-auto ">
            <div className="text-4xl font-bold p-2 font-mono tracking-widest text-center">
              {location.state.name}
            </div>
            <div className="my-1 mx-1 p-2 tracking-widest text-[#606470] text-center">
              {location.state.bio}
            </div>
          </div>
          <div className="absolute right-40 bottom-0 flex font-semibold rounded-lg">
            <button
              onClick={() => setOpenTab(1)}
              className={`text-center ${
                openTab === 1 && "border-2 border-[#323643]"
              } p-2  border border-[#606470] rounded-l-lg w-32`}
            >
              Performance
            </button>
            <button
              onClick={() => setOpenTab(2)}
              className={`text-center ${
                openTab === 2 && "border-2 border-[#323643]"
              } p-2  border border-[#606470]  w-32`}
            >
              Posts
            </button>
            <button
              onClick={() => setOpenTab(3)}
              className={`text-center ${
                openTab === 3 && "border-2 border-[#323643]"
              } p-2  border border-[#606470] rounded-r-lg w-32`}
            >
              Tasks
            </button>
          </div>
        </div>
      </div>
      <div className={openTab === 3 ? "py-4 bg-[#F7F7F7]" : "hidden"}>
        <div className="grid place-items-end">
          <button
            onClick={() => setnewTask(true)}
            className="mx-4 px-3 py-1 rounded-full bg-blue-500 text-white hover:bg-blue-700 "
          >
            + New Task
          </button>
        </div>
        <Chart
          chartType="Gantt"
          width="100%"
          height="100%"
          data={tasksData}
          options={tasksOptions}
        />
      </div>
      <div className={openTab === 1 ? "py-4 bg-[#F7F7F7]" : "hidden"}>
        <p className="ml-36 px-2 font-semibold text-xl tracking-widest">
          Performance of Writer{" "}
        </p>
        <p className="ml-36 px-2 font-sm text-gray-500">
          On the basic of Attendence, Qualtiy of work, and Meeting Deadlines
        </p>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={performanceData}
          options={performanceOptions}
        />
      </div>
      <div className={openTab === 2 ? "py-4 bg-[#F7F7F7]" : "hidden"}>
        <DataTable
          columns={columnsofposts}
          data={postsData}
          fixedHeader
          fixedHeaderScrollHeight="450px"
          pagination
          highlightOnHover
          customStyles={customStyles}
        />
      </div>
      <Modal show={newTask} onClose={()=>setnewTask(false)}>
        <Modal.Header>Create new task for {writerData[location.state.id-1].name}</Modal.Header>
        <Modal.Body>
          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="tracking-widest font-semibold text-blue-500 p-1">Name:</div>
              <input value={name} onChange={(e)=>setname(e.target.value)} className="w-full focus:ring-0 border-b-2 focus:ring-b-2 border-blue-500 border-r-0 border-l-0 border-t-0" placeholder="Enter task name" type="text" />
              <div className="mt-5 tracking-widest font-semibold text-blue-500 p-1">Description:</div>
              <textarea value={description} onChange={(e)=>setdescription(e.target.value)} placeholder="Write description of task" className="w-full rounded-lg border border-blue-500" cols="80" rows="4"/>
              <div className="flex gap-4 my-2 place-items-center">
                <div className="tracking-widest font-semibold text-blue-500 p-1">Start Date:</div>
                <div className="tracking-widest font-semibold border border-gray-400 py-2 px-10">{date}</div>
              </div>
              <div className="flex my-2 place-items-center gap-6">
                <div className="tracking-widest font-semibold text-blue-500 p-1">Due Date:</div>
                <input value={end_date} onChange={(e)=>setend_date(e.target.value)} className="border border-gray-400 font-semibold" type="date"  />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Create</Button>
          <Button color="gray" onClick={()=>setnewTask(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WriterInfo;
