import React from "react";
import { useState } from "react";
import ErrorMessage from "../../Components/ErrorMessage";
import SuccessMessage from "../../Components/SuccessMessage";
import axios from "../../Utils/Axios";
import Sidebar from "./Sidebar";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import useKothar from "../../context/useKothar";
import { format } from "date-fns";

const AdminUni = () => {
  const [data, setData] = useState();
  const [message, setMessage] = useState({});
  const [open, setOpen] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("admin/university", data)
      .then((res) => {
        // console.log(res);
        setMessage({ success: res?.data?.message });
        setData({
          image: "",
          website: "",
        });
      })
      .catch((err) => {
        setMessage({ error: err?.data?.message });
      });
  };

  const [{ uniList }] = useKothar();
  const handleOpen = () => setOpen(!open);
  const deleteData = (id) => {
    axios
      .delete(`/admin/university:${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Sidebar />

      <section className="md:ml-64 mt-20">
        <div className="container mx-auto">
          <div className="row">
            <div className="grid md:grid-cols-6 grid-cols-1 items-center  mt-8">
              <div className="col-span-12 mt-10 md:mt-0 shadow-lg rounded p-4">
                <div className="flex items-center justify-between px-10">
                  <p className="md:text-3xl text-xl">View Universities</p>
                  <Button color="green" onClick={handleOpen}>
                    Add Universities
                  </Button>
                </div>

                <div className="form-container bg-white px-10 py-12 rounded-lg">
                  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="py-3 px-6">
                            Name
                          </th>
                          <th scope="col" class="py-3 px-6">
                            Website
                          </th>
                          <th scope="col" class="py-3 px-6">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {uniList?.length > 0 &&
                          uniList.map((item) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                scope="row"
                                class="py-4 px-6 font-small text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {item?.name}
                              </th>
                              <td class="py-4 px-6">
                                {item?.website?.slice(0, 100)}
                              </td>
                              <td class="py-4 px-6 text-right flex space-x-4 items-center">
                                <Button color="green">Edit</Button>

                                <Button
                                  color="red"
                                  onClick={() => deleteData(item?.id)}
                                >
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <Dialog open={open} handler={handleOpen}>
              <DialogHeader>Add University</DialogHeader>
              <DialogBody divider>
                <div className="grid items-center mt-4 w-full  mx-auto">
                  <div className="mt-10 md:mt-0">
                    <div className="form-container">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                          <input
                            type="text"
                            className="input-form bg-[#EDEDED] focus:bg-[#ededed] focus:outline focus:outline-2 focus:outline-blue focus:outline-2 focus:outline-blue"
                            placeholder="Website url"
                            required
                            value={data?.website}
                            onChange={handleInputChange}
                            name="website"
                          />
                        </div>

                        <div className="mb-6 mt-8">
                          <input type="file" />
                        </div>
                        {message?.success && (
                          <SuccessMessage
                            message={message?.success}
                            setMessage={setMessage}
                          />
                        )}
                        {message?.error && (
                          <ErrorMessage
                            message={message?.success}
                            setMessage={setMessage}
                          />
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={handleOpen}>
                  <span>Confirm</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminUni;