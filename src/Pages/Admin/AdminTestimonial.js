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
import { baseURL } from "../../Utils/base";
import { toast } from "react-toastify";

const AdminTestimonial = () => {
  const [data, setData] = useState();
  const [message, setMessage] = useState({});
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  const [{ testimonial }, { setTestimonial, getTestimonial }] = useKothar();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const finalData = new FormData();
    // for (const key of Object.keys(data)) {
    //   finalData.append(key, data[key]);
    // }

    axios
      .post(`admin/testimonials`, data)
      .then((res) => {
        toast.success("Data added successfully");
        setData({
          name: "",
          tetimonial: "",
        });
        setOpen(!open);
        getTestimonial();
      })
      .catch((err) => {
        toast.error("Error");
      });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`admin/testimonials/${data?.id}`, data)
      .then((res) => {
        setData({
          image: "",
          website: "",
        });
        setOpen(!open);
        toast.success("Data Updated successfully");
        getTestimonial();
      })
      .catch((err) => {
        toast.error("Error");
      });
  };
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const handleAddFiles = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));

    getBase64(e.target.files[0], (result) => {
      setData((prevState) => ({ ...prevState, image: result }));
    });
  };

  const handleOpen = () => {
    setOpen(!open);
    setData({
      name: "",
      tetimonial: "",
    });
    setPreview();
  };
  const deleteData = (id) => {
    axios
      .delete(`/admin/testimonials/${id}`)
      .then((res) => {
        toast.success("Data Deleted successfully");
        setTestimonial((prevState) => [
          ...prevState.filter((item) => item?.id !== id),
        ]);
        getTestimonial();
      })
      .catch((err) => console.log(err));
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
                  <p className="md:text-3xl text-xl">Testimonial</p>
                  <Button color="green" onClick={handleOpen}>
                    Add Testimonial
                  </Button>
                </div>

                <div className="form-container bg-white px-10 py-12 rounded-lg">
                  <div className="overflow-x-auto overflow-y-auto max-h-[600px] relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 fixeed">
                        <tr>
                          <th scope="col" className="py-3 px-6">
                            Name
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Testimonial
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {testimonial?.length > 0 ? (
                          testimonial?.map((item) => (
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
                                {item?.tetimonial.slice(0, 100)}
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
                {data?.id ? "Edit" : "Add"} Testimonial
              </DialogHeader>
              <form onSubmit={data?.id ? handleUpdate : handleSubmit}>
                <DialogBody divider>
                  <div className="grid items-center mt-4 w-full  mx-auto">
                    <div className="mt-10 md:mt-0">
                      <div className="form-container mx-2">
                        <div className="mb-6">
                          <Input
                            type="text"
                            label="Name"
                            size="lg"
                            color="indigo"
                            required
                            value={data?.name}
                            onChange={handleInputChange}
                            name="name"
                          />
                        </div>

                        <div className="mb-6 mt-8">
                          <Textarea
                            type="text"
                            name="tetimonial"
                            size="lg"
                            color="indigo"
                            value={data?.tetimonial}
                            rows={4}
                            label="Testimonial Details ......."
                            onChange={handleInputChange}
                            required
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
                            name="file"
                            onChange={handleAddFiles}
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

export default AdminTestimonial;
