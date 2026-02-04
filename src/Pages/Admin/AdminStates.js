import React from "react";
import { useState } from "react";
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
  Tooltip,
} from "@material-tailwind/react";
import useKothar from "../../context/useKothar";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { FaRegFileImage } from "react-icons/fa";
import states from "../../assets/images/states.png";

const AdminStates = () => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [addedDetails, setAddedDetails] = useState([]);
  const [whyHeading, setWhyHeading] = useState("");
  const [reasonTitle, setReasonTitle] = useState("");
  const [reasonDesc, setReasonsDesc] = useState("");
  const [preview, setPreview] = useState();
  const [{ destinations }, { setDestinations, getDestinations }] = useKothar();
  document.title = "Admin Dashboard - Kothar Educational Services";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  const handleFileChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    getBase64(e.target.files[0], (result) => {
      setData((prevState) => ({ ...prevState, image: result }));
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("admin/destinations", {
        ...data,
        whyDestination: { title: whyHeading, ans: addedDetails },
      })
      .then((res) => {
        toast.success("Data added successfully");
        getDestinations();
        setOpen(!open);
      })
      .catch((err) => {
        toast.error("Error");
      });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`admin/destinations/${data?.id}`, {
        ...data,
        whyDestination: { title: whyHeading, ans: addedDetails },
      })
      .then((res) => {
        setData({
          image: "",
          website: "",
        });
        setOpen(!open);
        toast.success("Data Updated successfully");
        // window.location.reload();
        getDestinations();
      })
      .catch((err) => {
        toast.error("Error");
      });
  };

  const handleOpen = () => {
    setOpen(!open);
    setData({
      destination: "",
      destinationDesc: "",
    });
    setWhyHeading("");
    setAddedDetails("");
    setPreview();
    setAddedDetails([]);
    setReasonTitle("");
    setReasonsDesc("");
  };
  const deleteData = (id) => {
    axios
      .delete(`/admin/destinations/${id}`)
      .then((res) => {
        toast.success("Data Deleted successfully");

        getDestinations();
      })
      .catch((err) => console.log(err));
  };
  const handleAddDetails = () => {
    setAddedDetails((prevState) => [
      { title: reasonTitle, desc: reasonDesc },
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

  const handleEdit = (itemData) => {
    setOpen(true);
    setData({
      ...itemData,
      destination: itemData?.destination,
      destinationDesc: itemData?.destinationDesc,
    });
    setWhyHeading(
      itemData?.whyDestination[0]?.title || itemData?.whyDestination?.title,
    );
    setAddedDetails(
      itemData?.whyDestination[0]?.ans || itemData?.whyDestination?.ans,
    );
    setPreview(itemData?.image);
  };

  const editRow = (i) => {
    setAddedDetails((prevState) => [
      ...prevState.filter(
        (arg) => prevState.indexOf(arg) !== prevState.indexOf(i),
      ),
    ]);
    setReasonsDesc(i.desc);
    setReasonTitle(i.title);
  };
  const formClassName = " py-2.5";
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
                  <div className="overflow-x-auto relative shadow-md sm:rounded-lg overflow-y-auto max-h-[600px]">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="py-3 px-6">
                            Name
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Description
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {destinations?.length > 0 ? (
                          destinations?.map((item) => (
                            <tr
                              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                              key={item?.id}
                            >
                              <td
                                scope="row"
                                className="py-4 px-6 font-small text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {item?.destination}
                              </td>
                              <td className="py-4 px-6">
                                {item?.destinationDesc?.slice(0, 100)}
                              </td>
                              <td className="py-4 px-6 text-right flex space-x-4 items-center">
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
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td
                              colSpan={3}
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
            <Dialog
              open={open}
              handler={handleOpen}
              size="lg"
              className="dialogBody"
            >
              <div className="dialogContent">
                <DialogHeader>
                  <div className="w-full flex justify-between items-center">
                    {data?.id ? "Edit" : "Add"} State{" "}
                    <a
                      href={states}
                      target="_blank"
                      className="flex items-center text-base gap-2 font-normal cursor-pointer"
                    >
                      See Design Template <FaRegFileImage />
                    </a>
                  </div>
                </DialogHeader>
                <form onSubmit={data?.id ? handleUpdate : handleSubmit}>
                  <DialogBody divider>
                    <div className="grid items-center mt-4 w-full pt-4  mx-auto ">
                      <div className="mt-10 md:mt-0">
                        <div className="form-container mx-2">
                          <div className="mb-6">
                            <Input
                              type="text"
                              label="State Name"
                              color="indigo"
                              size="lg"
                              required
                              value={data?.destination}
                              onChange={handleInputChange}
                              name="destination"
                            />
                          </div>
                          <div className="mb-6">
                            <Textarea
                              type="text"
                              color="indigo"
                              name="destinationDesc"
                              size="lg"
                              value={data?.destinationDesc}
                              rows={4}
                              label="State Description"
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="mb-6">
                            <input
                              type="file"
                              name="image"
                              onChange={handleFileChange}
                            />
                          </div>
                          {(data?.image || preview) && (
                            <img
                              loading="lazy"
                              src={preview}
                              alt="State preview"
                              className="h-[200px] object-cover"
                            />
                          )}
                          <div className="mb-5 mt-4">
                            <Input
                              className={formClassName + " mb-5"}
                              label="Why this state Heading"
                              color="indigo"
                              size="lg"
                              // required
                              name="title"
                              value={whyHeading}
                              onChange={(e) => setWhyHeading(e.target.value)}
                            />
                            <p className="my-2">Reasons</p>
                            <div className="grid grid-cols-6 items-start justify-between mb-3 gap-4">
                              <div className="col-span-6 md:col-span-2">
                                <Input
                                  className={formClassName}
                                  label="Title"
                                  color="indigo"
                                  size="lg"
                                  name="title"
                                  value={reasonTitle}
                                  onChange={(e) =>
                                    setReasonTitle(e.target.value)
                                  }
                                />
                              </div>{" "}
                              <div className="col-span-6 md:col-span-3">
                                <Textarea
                                  className={formClassName}
                                  label="Description*"
                                  color="indigo"
                                  size="lg"
                                  name="desc"
                                  value={reasonDesc}
                                  onChange={(e) =>
                                    setReasonsDesc(e.target.value)
                                  }
                                />
                              </div>
                              <div className="col-span-6 md:col-span-1 ml-auto mr-4">
                                <Tooltip content="Hello">
                                  <IconButton
                                    color="green"
                                    className=""
                                    disabled={
                                      reasonTitle === "" || reasonDesc === ""
                                    }
                                  >
                                    <IoAddCircleOutline
                                      className="text-xl"
                                      onClick={handleAddDetails}
                                    />
                                  </IconButton>
                                </Tooltip>
                              </div>
                            </div>
                            <div className="max-h-[200px] overflow-auto">
                              {addedDetails?.length > 0 &&
                                addedDetails?.map((item, i) => (
                                  <div className="grid grid-cols-6 items-start justify-between mb-3 gap-4">
                                    <div className="col-span-6 md:col-span-2">
                                      {item?.title}
                                    </div>
                                    <div className="col-span-6 md:col-span-3 text-justify">
                                      {item?.desc}
                                    </div>
                                    <div className="col-span-6 md:col-span-1 ml-auto gap-2">
                                      <IconButton
                                        color="green"
                                        className="min-w-[30px] mr-4"
                                      >
                                        <AiOutlineEdit
                                          className="text-xl"
                                          onClick={() => editRow(item)}
                                        />
                                      </IconButton>
                                      <IconButton
                                        color="red"
                                        className="min-w-[30px]"
                                      >
                                        <AiOutlineDelete
                                          className="text-xl"
                                          onClick={() => deleteRow(i)}
                                        />
                                      </IconButton>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
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
              </div>
            </Dialog>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminStates;
