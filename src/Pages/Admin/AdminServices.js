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
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import useKothar from "../../context/useKothar";
import { format } from "date-fns";
import { AiOutlineDelete } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5";
const AdminServices = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    image: "",
    what: {
      title: "",
      desc: "",
    },
    who: {
      title: "",
      desc: "",
    },
    more: {
      title: "",
      infos: [
        {
          title: "",
          desc: "",
        },
      ],
    },
  });
  const [message, setMessage] = useState({});
  const [open, setOpen] = useState(false);

  const [add, setAdd] = useState(false);
  const [addedDetails, setAddedDetails] = useState([]);
  const [moreTitle, setMoretitle] = useState("");
  const [moreDesc, setMoreDesc] = useState("");
  const [{ services }] = useKothar();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("admin/services", data)
      .then((res) => {
        setMessage({ success: res?.data?.message });

        setOpen(false);
      })
      .catch((err) => {
        setMessage({ error: err?.data?.message });
      });
  };

  const handleOpen = () => setOpen(!open);
  const deleteData = (id) => {
    axios
      .delete(`/admin/services/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const formClassName =
    "input-form bg-[#EDEDED] focus:bg-[#ededed] focus:outline focus:outline-2 focus:outline-blue py-2.5";

  const handleAddDetails = () => {
    setAdd(true);
    setAddedDetails((prevState) => [
      { title: moreTitle, desc: moreDesc },
      ...prevState,
    ]);
    setMoreDesc("");
    setMoretitle("");
  };
  const deleteRow = (id) => {
    setAddedDetails((prevState) => [
      ...prevState.filter((a) => prevState.indexOf(a) !== id),
    ]);
  };
  return (
    <>
      <Sidebar />

      <section className="md:ml-64 mt-20">
        <div className="container mx-auto">
          <div className="row">
            <div className="grid md:grid-cols-6 grid-cols-1 items-center  mt-4">
              <div className="col-span-12 mt-10 md:mt-0 shadow-lg rounded p-4">
                <div className="flex items-center justify-between px-10">
                  <p className="md:text-3xl text-xl">Services</p>
                  <Button color="green" onClick={handleOpen}>
                    Add Service
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
                            Description
                          </th>
                          <th scope="col" class="py-3 px-6">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {services?.services?.length > 0 ? (
                          services?.services?.map((item) => (
                            <tr
                              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                              key={item?.id}
                            >
                              <th
                                scope="row"
                                class="py-4 px-6 font-small text-gray-900 whitespace-nowrap min-w-[100px]"
                              >
                                {item?.serviceName}
                              </th>
                              <td class="py-4 px-6 min-w-[400px]">
                                {item?.descripttion?.slice(0, 100)}
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
                          ))
                        ) : (
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td
                              colSpan={3}
                              scope="row"
                              class="py-12 px-6 font-small text-gray-900 whitespace-nowrap text-center"
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
              <DialogHeader>Add Service</DialogHeader>
              <form onSubmit={handleSubmit}>
                <DialogBody divider>
                  <div className="grid items-center mt-4 w-full  mx-auto">
                    <div className="mt-10 md:mt-0">
                      <div className="form-container mx-4">
                        <div className="mb-5">
                          <Input
                            type="text"
                            size="lg"
                            color="indigo"
                            label="Service Name"
                            required
                            value={data?.name}
                            onChange={handleInputChange}
                            name="name"
                          />
                        </div>
                        <div className="mb-5 mt-4">
                          <Textarea
                            type="text"
                            name="description"
                            value={data?.enquiry}
                            rows={4}
                            size="lg"
                            color="indigo"
                            label="Service Description ......."
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-5 mt-4">
                          <p>What Information</p>
                          <div className="flex items-center flex-wrap lg:flex-nowrap mb-3 lg:space-x-6 space-y-3 lg:space-y-0">
                            <Input
                              size="lg"
                              color="indigo"
                              label="Title"
                              required
                              name="title"
                              value={data?.contactNo}
                              onChange={handleInputChange}
                            />
                            <Input
                              size="lg"
                              color="indigo"
                              label="Description*"
                              name="desc"
                              value={data?.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-5 mt-4">
                          <p>Who Information</p>
                          <div className="flex items-center flex-wrap lg:flex-nowrap mb-3 lg:space-x-6 space-y-3 lg:space-y-0">
                            <Input
                              size="lg"
                              color="indigo"
                              label="Title"
                              required
                              name="title"
                              value={data?.contactNo}
                              onChange={handleInputChange}
                            />
                            <Input
                              size="lg"
                              color="indigo"
                              label="Description*"
                              name="desc"
                              value={data?.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-5 mt-4">
                          <input type="file" />
                        </div>
                        <div className="mb-5 mt-4">
                          <p>More Information</p>
                          <Input
                            size="lg"
                            color="indigo"
                            label="More info Heading"
                            required
                            name="title"
                            value={data?.contactNo}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-5 mt-4">
                          <div className="flex items-center flex-wrap lg:flex-nowrap mb-3 lg:space-x-6 space-y-3 lg:space-y-0">
                            <Input
                              size="lg"
                              color="indigo"
                              label="Title"
                              name="title"
                              value={moreTitle}
                              onChange={(e) => setMoretitle(e.target.value)}
                            />
                            <Input
                              size="lg"
                              color="indigo"
                              label="Description*"
                              name="desc"
                              value={moreDesc}
                              onChange={(e) => setMoreDesc(e.target.value)}
                              required
                            />

                            <IconButton
                              color="green"
                              className="min-w-[40px]"
                              disabled={moreTitle === ""}
                            >
                              <IoAddCircleOutline
                                className="text-xl"
                                onClick={handleAddDetails}
                              />
                            </IconButton>
                          </div>
                          <div className="max-h-[100px] overflow-auto">
                            {addedDetails?.length > 0 &&
                              addedDetails?.map((item, i) => (
                                <div className="flex items-center justify-between flex-wrap lg:flex-nowrap mb-3 lg:space-x-6 space-y-3 lg:space-y-0 ">
                                  <span className="w-2/5">{item?.title}</span>
                                  <span className="w-2/5">{item?.desc}</span>
                                  <IconButton
                                    color="red"
                                    className="min-w-[40px] w-1/5"
                                  >
                                    <AiOutlineDelete
                                      className="text-xl"
                                      onClick={() => deleteRow(i)}
                                    />
                                  </IconButton>
                                </div>
                              ))}
                          </div>
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
                  <Button variant="gradient" color="green" type="submit">
                    <span>Confirm</span>
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

export default AdminServices;
