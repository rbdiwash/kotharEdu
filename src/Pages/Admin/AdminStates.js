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

import { AiOutlineDelete } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5";

const AdminStates = () => {
  const [data, setData] = useState();
  const [message, setMessage] = useState({});
  const [open, setOpen] = useState(false);
  const [addedDetails, setAddedDetails] = useState([]);
  const [whyHeading, setWhyHeading] = useState("");
  const [resonTitle, setReasonTitle] = useState("");
  const [reasonDesc, setReasonsDesc] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("admin/destinations", {
        ...data,
        whyDestination: { title: whyHeading, ans: addedDetails },
      })
      .then((res) => {
        console.log(res);
        setMessage({ success: res?.data?.message });
      })
      .catch((err) => {
        setMessage({ error: err?.data?.message });
      });
  };
  const [add, setAdd] = useState(false);

  const [{ destinations }] = useKothar();
  const handleOpen = () => {
    setOpen(!open);
    setData({
      topic: "",
      description: "",
    });
  };
  const deleteData = (id) => {
    axios
      .delete(`/admin/destinations/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const handleAddDetails = () => {
    setAdd(true);
    setAddedDetails((prevState) => [
      { title: resonTitle, desc: reasonDesc },
      ...prevState,
    ]);
    setReasonTitle("");
    setReasonsDesc("");
  };
  const deleteRow = (id) => {
    setAddedDetails((prevState) => [
      ...prevState.filter((a) => prevState.indexOf(a) !== id),
    ]);
  };
  const formClassName = " py-2.5";
  const handleEdit = (itemData) => {
    console.log("🚀 ~ itemData", itemData);
    setOpen(true);
    setData({
      destination: itemData?.destination,
      destinationDesc: itemData?.destinationDesc,
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
                  <p className="md:text-3xl text-xl">States</p>
                  <Button color="green" onClick={handleOpen}>
                    Add State
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
                        {destinations?.length > 0 ? (
                          destinations?.map((item) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td
                                scope="row"
                                class="py-4 px-6 font-small text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {item?.destination}
                              </td>
                              <td class="py-4 px-6">
                                {item?.destinationDesc?.slice(0, 100)}
                              </td>
                              <td class="py-4 px-6 text-right flex space-x-4 items-center">
                                <Button
                                  color="green"
                                  onClick={() => handleEdit(item)}
                                >
                                  Edit
                                </Button>

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
              <DialogHeader>Add State</DialogHeader>
              <form onSubmit={handleSubmit}>
                <DialogBody divider>
                  <div className="grid items-center mt-4 w-full  mx-auto">
                    <div className="mt-10 md:mt-0">
                      <div className="form-container mx-2">
                        <div className="mb-6">
                          <Input
                            type="text"
                            className=" "
                            label="State Name"
                            color="indigo"
                            size="lg"
                            required
                            value={data?.destination}
                            onChange={handleInputChange}
                            name="destination"
                          />
                        </div>
                        <div className="mb-5 mt-4">
                          <Textarea
                            type="text"
                            color="indigo"
                            name="destinationDesc"
                            size="lg"
                            value={data?.enquiry}
                            rows={4}
                            className={' "'}
                            label="State Description ......."
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-6 mt-8">
                          <input type="file" />
                        </div>
                        <div className="mb-5 mt-4">
                          <Input
                            className={formClassName + " mb-5"}
                            label="Why this state Heading"
                            color="indigo"
                            size="lg"
                            required
                            name="title"
                            value={whyHeading}
                            onChange={(e) => setWhyHeading(e.target.value)}
                          />
                          <p className="my-2">Reasons</p>
                          <div className="flex items-center flex-wrap lg:flex-nowrap mb-3 lg:space-x-6 space-y-3 lg:space-y-0">
                            <Input
                              className={formClassName + ""}
                              label="Title"
                              color="indigo"
                              size="lg"
                              name="title"
                              value={resonTitle}
                              onChange={(e) => setReasonTitle(e.target.value)}
                            />
                            <Input
                              className={formClassName}
                              label="Description*"
                              color="indigo"
                              size="lg"
                              name="desc"
                              value={reasonDesc}
                              onChange={(e) => setReasonsDesc(e.target.value)}
                            />

                            <IconButton
                              color="green"
                              className="min-w-[40px]"
                              disabled={resonTitle === ""}
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
                </DialogFooter>{" "}
              </form>
            </Dialog>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminStates;
