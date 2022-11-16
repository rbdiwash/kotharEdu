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
  Input,
  Textarea,
} from "@material-tailwind/react";
import useKothar from "../../context/useKothar";
import { format } from "date-fns";

const AdminNews = () => {
  const [data, setData] = useState();
  console.log("🚀 ~ data", data);
  const [message, setMessage] = useState({});
  const [open, setOpen] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("asdfsafa");
    // axios
    //   .post("book-appointment", data)
    //   .then((res) => {
    //     // console.log(res);
    //     setMessage({ success: res?.data?.message });
    //     setData({
    //       enquiryType: "",
    //       name: "",
    //       contactNo: "",
    //       email: "",
    //       enquiry: "",
    //     });
    //   })
    //   .catch((err) => {
    //     setMessage({ error: err?.data?.message });
    //   });
  };

  const [{ news }] = useKothar();

  const handleEdit = (itemData) => {
    setOpen(true);
    setData({ name: itemData?.topic, contact: itemData?.contact });
  };
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Sidebar />

      <section className="md:ml-64 mt-20">
        <div className="container mx-auto">
          <div className="row">
            <div className="grid md:grid-cols-6 grid-cols-1 items-center  mt-8">
              <div className="col-span-12 mt-10 md:mt-0 shadow-lg rounded p-4">
                <div className="flex items-center justify-between px-10">
                  <p className="md:text-3xl text-xl">News</p>
                  <Button color="green" onClick={handleOpen}>
                    Add News
                  </Button>
                </div>

                <div className="form-container bg-white px-10 py-12 rounded-lg">
                  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="py-3 px-6">
                            Topic
                          </th>
                          <th scope="col" class="py-3 px-6">
                            Date
                          </th>
                          <th scope="col" class="py-3 px-6">
                            Description
                          </th>

                          <th scope="col" class="py-3 px-6">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {news?.length > 0 &&
                          news.map((item) => (
                            <tr
                              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                              key={item?.id}
                            >
                              <th
                                scope="row"
                                class="py-4 px-6 font-small text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {item?.topic}
                              </th>
                              <td class="py-4 px-6">
                                {format(new Date(item?.date), "PP")}
                              </td>
                              <td class="py-4 px-6">{item?.description}</td>
                              <td class="py-4 px-6 text-right flex space-x-4 items-center">
                                <Button
                                  color="green"
                                  onClick={() => handleEdit(item)}
                                >
                                  Edit
                                </Button>

                                <Button color="red">Delete</Button>
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
              <DialogHeader>Add News</DialogHeader>
              <form onSubmit={handleSubmit}>
                <DialogBody divider>
                  <div className="grid items-center mt-4 w-full  mx-auto">
                    <div className="mt-10 md:mt-0">
                      <div className="form-container mx-2">
                        <div className="mb-6">
                          <Input
                            variant="outlined"
                            size="lg"
                            type="text"
                            color="indigo"
                            label="Your name here"
                            required
                            value={data?.name}
                            onChange={handleInputChange}
                            name="name"
                          />
                        </div>
                        <div className="flex items-center flex-wrap lg:flex-nowrap mb-3 lg:space-x-6 space-y-3 lg:space-y-0">
                          <Input
                            variant="outlined"
                            size="lg"
                            type="number"
                            color="indigo"
                            label="Contact No*"
                            required
                            name="contactNo"
                            value={data?.contactNo}
                            onChange={handleInputChange}
                          />
                          <Input
                            variant="outlined"
                            size="lg"
                            label="Email Address*"
                            color="indigo"
                            type="email"
                            name="email"
                            value={data?.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-6 mt-8">
                          <h2 className="mb-4"> Any Enquiry</h2>
                          <Textarea
                            variant="outlined"
                            color="indigo"
                            size="lg"
                            type="text"
                            name="enquiry"
                            value={data?.enquiry}
                            rows={4}
                            label="Write any enquiry you have ......."
                            onChange={handleInputChange}
                            required
                          />
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
                  <Button
                    variant="gradient"
                    color="green"
                    type="submit"
                    // onClick={handleSubmit}
                  >
                    Confirm
                  </Button>
                </DialogFooter>
              </form>
            </Dialog>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminNews;
