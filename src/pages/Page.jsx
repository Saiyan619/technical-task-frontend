import React from "react";

import { Link, Outlet } from "react-router-dom";

const NavigationLinks1 = [
  { title: "Dashboard", linkTo: "/Dashboard", image: "./Graph.svg" },
  { title: "Overview", linkTo: "/Dashboard", image: "./Chart.svg" },
  { title: "Chat", linkTo: "/", image: "./Chat.svg" },
  { title: "Team", linkTo: "/", image: "./User.svg" },
];

const NavigationLinks2 = [
  { title: "Tasks", linkTo: "/", image: "./Document.svg" },
  { title: "Reports", linkTo: "/", image: "./Danger.svg" },
  { title: "Settings", linkTo: "/", image: "./Setting.svg" },
]

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

              <div className="flex justify-between items-center bg-blue-600 p-4 rounded-lg">

                <div className="flex items-center gap-3">
                <div className="avatar avatar-placeholder">
  <div className="bg-yellow-500 text-neutral-content w-8 rounded-full">
    <span className="text-xs text-black flex justify-center mt-[10px]">DW</span>
  </div>
                  </div>

                  <div>
                  <span>Dlex Designs</span>
                  <p>general team</p>
                </div>
             </div>

             <div>

<img src="./unfold_more.svg" alt="icon" />
            </div>
                
              </div>

      {NavigationLinks1.map((item) => {
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
              <div className="ml-2 mt-4"><span className="text-blue-400">SHORTCUT</span></div>
      {NavigationLinks2.map((item) => {
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
