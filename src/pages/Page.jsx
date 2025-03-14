import React from "react";

import { Link, Outlet } from "react-router-dom";

const NavigationLinks = [
  { title: "Dashboard", linkTo: "/", image: "./icon_home.png" },
  { title: "Overview", linkTo: "/appointments", image: "./Group.png" },
  { title: "Chat", linkTo: "/", image: "./ion_logo-whatsapp.png" },
  { title: "Team", linkTo: "/", image: "./Component 5.png" },
  { title: "Tasks", linkTo: "/", image: "./Component 3.png" },
  { title: "Reports", linkTo: "/", image: "./Component 2.png" },
  { title: "Settings", linkTo: "/", image: "./trending-up.png" },
];

const Page = () => {
  return (
    <div className="">
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
          <ul className="rounded menu flex flex-col justify-between h-full text-white bg-blue-700 w-[220px] md:w-[220px] ">
            {/* Sidebar content here */}

            <div>
      {NavigationLinks.map((item) => {
              return (
                <Link className="mt-3" to={item.linkTo}>
                  <li className="">
                    <div className="flex items-center p-2 flex-row mt-4">
                      <img className="w-5" src={item.image} alt="" />

                      <span>{item.title}</span>
                    </div>
                  </li>
                </Link>
              );
            })}
            </div>

            <div>
            <div className="bg-blue-900 p-2 rounded">

<div className="flex justify-between">
  <span>Storage</span>
  <span>Upgrade</span>
</div>

<div >
<span>3.4GB of 15GB</span>
  <progress className="progress progress-primary w-full" value="70" max="100"></progress>
</div>
</div>

              <div className="p-2 flex items-center justify-between gap-3 mt-5 border-t">
              <div className="avatar flex items-center gap-2">
  <div className="w-8 rounded-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      alt="Tailwind-CSS-Avatar-component" />
                  </div>
                  <span>Jane Smith</span>

</div>

                <div>

<img src="./unfold_more.svg" alt="icon" />
            </div>

              </div>

           </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
