import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../Components/ErrorMessage";
import SuccessMessage from "../../Components/SuccessMessage";
import axios from "../../Utils/Axios";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  const [message, setMessage] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("admin/login", data)
      .then((res) => {
        setMessage({ success: res?.data?.message });
        setData({
          username: "",
          password: "",
        });
        localStorage.setItem("token", res?.data?.accessToken);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err?.data?.message);
        // setMessage({ error: err?.data?.message || "Error" });
      });
  };
  return (
    <div>
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[70vh] lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-primary">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your E-mail/Username
                  </label>
                  <input
                    // type="email"
                    name="username"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Type your username or email"
                    required
                    value={data?.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                    value={data?.password}
                    onChange={handleInputChange}
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
                    message={message?.error}
                    setMessage={setMessage}
                  />
                )}
                <button type="submit" className="w-full btn">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
