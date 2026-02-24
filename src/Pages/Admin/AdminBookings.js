import React, { useEffect } from "react";
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
import { toast } from "react-toastify";

const AdminBookings = () => {
  const [data, setData] = useState();
  const [message, setMessage] = useState({});
  const [open, setOpen] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    axios
      .get("admin/book-appointment")
      .then((res) => {
        setData(res?.data?.appointments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOpen = () => setOpen(!open);
  const deleteData = (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) {
      return;
    }
    axios
      .delete(`/admin/book-appointment/${id}`)
      .then((res) => {
        setData((prevState) => [
          ...prevState.filter((item) => item?.id !== id),
        ]);
        toast.success("Data Deleted Successfully");
      })
      .catch((err) => {
        toast.error("Error Deleting Data");
      });
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
                  <p className="md:text-3xl text-xl">Bookings</p>
                </div>

                <div className="form-container bg-white px-10 py-12 rounded-lg">
                  <div className="overflow-x-auto relative shadow-md sm:rounded-lg overflow-y-auto max-h-[600px]">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="py-3 px-6">
                            Name
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Email
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Enquiry Type
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Enquiry
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Requested Date
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.length > 0 ? (
                          data?.map((item) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                scope="row"
                                className="py-4 px-6 font-small text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {item?.name?.slice(0, 30)}
                              </th>
                              <td className="py-4 px-6">{item?.email}</td>
                              <td className="py-4 px-6">{item?.enquiryType}</td>
                              <td className="py-4 px-6">
                                {item?.enquiry.slice(0, 50)}
                              </td>
                              <td className="py-4 px-6">
                                {format(new Date(item?.requestedDate), "PP")}
                              </td>
                              <td className="py-4 px-6 text-right flex space-x-4 items-center">
                                <Button
                                  color="red"
                                  onClick={() => deleteData(item?.id)}
                                >
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td
                              colSpan={6}
                              scope="row"
                              className="py-12 px-6 font-small text-gray-900 whitespace-nowrap text-center"
                            >
                              No Results Found
                            </td>
                          </tr>
                        )}
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
                      <form>
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

export default AdminBookings;
