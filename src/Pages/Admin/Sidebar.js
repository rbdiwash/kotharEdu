import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            href="/admin"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-center w-full inline-block"
          >
            <h6 color="gray">Admin Dashboard</h6>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/admin/states"
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-primary text-white shadow-md"
                >
                  States
                </NavLink>
              </li>
              <li className="rounded-lg mb-2">
                <NavLink
                  to="/admin/news"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-primary text-white shadow-md"
                >
                  News
                </NavLink>
              </li>
              <li className="rounded-lg mb-2">
                <NavLink
                  to="/admin/services"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-primary text-white shadow-md"
                >
                  Services
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 ">
                <NavLink
                  to="/admin/testimonials"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-primary text-white shadow-md"
                >
                  Testimonials
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 text-gray-700">
                <NavLink
                  to="/admin/uni"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-primary text-white shadow-md"
                >
                  Universities
                </NavLink>
              </li>
            </ul>
            <ul className="flex-col min-w-full flex list-none absolute bottom-0">
              <li className="bg-primary px-4 rounded-lg text-white text-center mb-2 py-3">
                <Link to="/" className="py-3">
                  Go to Homepage
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
