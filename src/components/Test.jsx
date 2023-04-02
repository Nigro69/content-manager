import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function Test() {
  const [array, setarray] = useState([]);
  const [confirmDelete, setconfirmDelete] = useState(false);
  const [deleteId, setdeleteId] = useState(0);

  const getMyResult = async () => {
    try {
      const res = await axios.get("/blogs/");
      console.log(res.data);
      setarray(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleted=(id)=>{
    setconfirmDelete(true);
    setdeleteId(id);
  }

  const deleteBlog = async () => {
    try {
      const res = await axios.delete(`/blog/${deleteId}/`);
      console.log(res.data);
      setconfirmDelete(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const navigate = useNavigate();
  const editBlog = (id) => {
    navigate("/dashboard/post", { state: { id: id } });
  };

  useEffect(() => {
    getMyResult();
  }, [confirmDelete]);

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-y-scroll max-h-96">
        <thead className="text-l text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Project Title
            </th>
            <th scope="col" className="py-3 px-6">
              publish Date
            </th>
            <th scope="col" className="py-3 px-6">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="py-3 px-6">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {array.map((row) => (
            <tr
              key={row.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {row.title}
              </th>
              <td className="py-4 px-6">{row.created.slice(0, 10)}</td>
              <td className="py-4 px-6 text-right">
                <p
                  onClick={()=>editBlog(row.id)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                >
                  Edit
                </p>
              </td>
              <td className="py-4 px-6 text-right">
                <p
                  onClick={() => deleted(row.id)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                >
                  Delete
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        show={confirmDelete}
        size="md"
        popup={true}
        onClose={() => setconfirmDelete(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={deleteBlog}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setconfirmDelete(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
