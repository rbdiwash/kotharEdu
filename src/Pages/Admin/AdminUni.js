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
} from "@material-tailwind/react";
import useKothar from "../../context/useKothar";
import { format } from "date-fns";
import { toast } from "react-toastify";

const AdminUni = () => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState();
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
      .post("admin/universities", data)
      .then((res) => {
        // console.log(res);
        setData({
          image: "",
          website: "",
        });
        setOpen(!open);
        toast.success("Data added successfully");
      })
      .catch((err) => {
        toast.error("Error");
      });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`admin/universities/${data?.id}`, data)
      .then((res) => {
        setData({
          image: "",
          website: "",
        });
        setOpen(!open);
        toast.success("Data Updated successfully");
        window.location.reload();
      })
      .catch((err) => {
        toast.error("Error");
      });
  };

  const [{ uniList }, { setUniList }] = useKothar();
  const handleOpen = () => {
    setOpen(!open);
    setData({
      image: "",
      website: "",
      name: "",
    });
    setPreview();
  };
  const deleteData = (id) => {
    axios
      .delete(`/admin/universities/${id}`)
      .then((res) => {
        toast.success("Data Deleted successfully");
        setUniList((prevState) => [
          ...prevState.filter((item) => item?.id !== id),
        ]);
      })
      .catch((err) => toast.error("Error Deleting Data"));
  };
  const handleEdit = (itemData) => {
    setOpen(true);
    setData(itemData);
    setPreview(itemData?.image);
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
                  <p className="md:text-3xl text-xl">Universities</p>
                  <Button color="green" onClick={handleOpen}>
                    Add Universities
                  </Button>
                </div>

                <div className="form-container bg-white px-10 py-12 rounded-lg">
                  <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="py-3 px-6">
                            Name
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Website
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {uniList?.length > 0 ? (
                          uniList.map((item) => (
                            <tr
                              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                              key={item?.id}
                            >
                              <th
                                scope="row"
                                className="py-4 px-6 font-small text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {item?.name}
                              </th>
                              <td className="py-4 px-6">
                                {item?.website?.slice(0, 100)}
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
            <Dialog open={open} handler={handleOpen}>
              <DialogHeader>
                {data?.id ? "Edit" : "Add"} University
              </DialogHeader>
              <form onSubmit={data?.id ? handleUpdate : handleSubmit}>
                <DialogBody divider>
                  <div className="grid items-center mt-4 w-full  mx-auto">
                    <div className="mt-10 md:mt-0">
                      <div className="form-container">
                        <div className="mb-6">
                          <Input
                            type="text"
                            size="lg"
                            color="indigo"
                            label="University Name"
                            required
                            value={data?.name}
                            onChange={handleInputChange}
                            name="name"
                          />
                        </div>
                        <div className="mb-6">
                          <Input
                            type="text"
                            size="lg"
                            color="indigo"
                            label="Website url"
                            required
                            value={data?.website}
                            onChange={handleInputChange}
                            name="website"
                          />
                        </div>

                        {(data?.image || preview) && (
                          <img
                            src={preview}
                            className="h-[200px] object-cover"
                          />
                        )}
                        <div className="mb-6 mt-8">
                          <input
                            type="file"
                            name="image"
                            onChange={handleFileChange}
                          />
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
                  <Button variant="gradient" color="green" type={"submit"}>
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

export default AdminUni;
