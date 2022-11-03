import React from "react";
import Sidebar from "./Sidebar";

const Admin = () => {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <div className="bg-light-blue-500 px-3 md:px-8 h-40" />
        <div className="px-3 md:px-8 -mt-24">
          <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 xl:grid-cols-5">
              <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14"></div>
              <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14"></div>
            </div>
          </div>
        </div>
        <div className="px-3 md:px-8">
          <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4"></div>
          </div>
        </div>
        <div className="px-3 md:px-8 h-auto">
          <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 xl:grid-cols-5">
              <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14"></div>
              <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
