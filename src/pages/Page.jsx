import React from "react";

import { Link, Outlet } from "react-router-dom";

const NavigationLinks = [
  { title: "Home", linkTo: "/", image: "./icon_home.png" },
  { title: "Appointments", linkTo: "/appointments", image: "./Group.png" },
  { title: "WhatsApp Chat", linkTo: "/", image: "./ion_logo-whatsapp.png" },
  { title: "Patients Record", linkTo: "/", image: "./Component 5.png" },
  { title: "Manage Staff", linkTo: "/", image: "./Component 3.png" },
  { title: "Payments", linkTo: "/", image: "./Component 2.png" },
  { title: "Analytics", linkTo: "/", image: "./trending-up.png" },
];

const Page = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu text-base-content h-full bg-white border w-[220px] md:w-[170px]  font-bold">
            {/* Sidebar content here */}

            {NavigationLinks.map((item) => {
              return (
                <Link className="mt-3" to={item.linkTo}>
                  <li className="">
                    <div className="flex items-center p-2 flex-row">
                      <img className="w-5" src={item.image} alt="" />

                      <span>{item.title}</span>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
