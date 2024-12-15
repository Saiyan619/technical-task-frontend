import React from "react";

const Home = () => {
  return (
    <div className="p-6 m-auto">
      <div className="flex justify-between items-center">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>User Profile</a>
            </li>
          </ul>
        </div>

        <button>Refresh</button>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between gap-7 mt-10">
        <div className="flex flex-col md:w-2/3 lg:w-2/3">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-20 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="badge p-3 rounded-md text-xs font-bold bg-yellow-400">
                Super Admin
              </div>

              <span className="text-2xl">Dr Kim Jones</span>

              <div className="flex">
                <button className="btn bg-green-600 btn-xs text-white">
                  Save
                </button>
                <button className="btn bg-gray-300 btn-xs">Cancel</button>
              </div>
            </div>
          </div>
          <div className="divider"></div>

          <div>
            <div className="flex w-full flex-col">
              <div className="mt-2 card bg-base-300 rounded pl-2 pt-1 shadow-sm h-8 ">
                Manage Clicks
              </div>
              <div className="mt-2 card bg-base-300 rounded pl-2 pt-1 shadow-sm h-8 ">
                Clinic Details
              </div>
              <div className="mt-2 card bg-base-300 rounded pl-2 pt-1 shadow-sm h-8 ">
                Payment Settings
              </div>
              <div className="mt-2 card bg-base-300 rounded pl-2 pt-1 shadow-sm h-8 ">
                Prescription Settings
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="font-bold">Settings</span>

          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <span className="font-bold mt-2">Ai predictive search</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                defaultChecked
              />
            </div>

            <p className="text-xs text-gray-500">
              The AI search allows you to give predictive analysis based on
              patient vitals, examinations, labs and reports.
            </p>
          </div>

          <div>
            <span className="font-bold mt-2">Prescription layout</span>
            <p className="text-xs text-gray-500">
              Choose from the template available or add your own templates
            </p>

            <div className="flex gap-3">
              <div className="bg-gray-300 w-24 h-24 text-sm p-1">
                Add custom template
              </div>

              <div className="bg-gray-300 w-24 h-24 flex items-center justify-center">
                <img src="./Letter head.png" className="w-16 " alt="" />
              </div>
            </div>
            <span className="text-blue-600">
              change contents in prescriptions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
