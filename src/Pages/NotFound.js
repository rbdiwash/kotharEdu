import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="row flex flex-col justify-center items-center h-full">
        <h1
          className="text-center mb-5"
          style={{ fontSize: "100px", color: "#f33f3f" }}
        >
          Oops!
        </h1>
        <h1 className="mb-4 text-white text-3xl">404 - PAGE NOT FOUND</h1>
        <p className="mb-4 text-white">
          The page you are looking for might have <br /> been removed or had its
          name changed or is not Unavailable.
        </p>
        <Link to="/" className="text-white mt-3 filled-button">
          <span>Back to Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
