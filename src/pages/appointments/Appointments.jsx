import React from "react";
import AddEmailInput from "./AddEmailInput";
import AddContacts from "./AddContacts";
import AddTime from "./AddTime";
import CheckBox from "./CheckBox";

const Appointments = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="bg-gray-300 h-1/2 p-10 flex items-center justify-center">
          <img src="./Letter head.png" className="w-full" alt="" />
        </div>

        <div className="mt-5 md:w-1/2">
          <span className="font-bold">Settings</span>
          <p className="font-bold">Prescription Contents</p>
          <p className="text-xs text-gray-400">
            Finish the clinic details on the prescription
          </p>

          <span className="font-bold text-sm text-gray-500">Header Info</span>

          <div className="flex items-center justify-between">
            <span>Add Clinic logo</span>

            <div className="bg-gray-300 w-20 p-7 rounded-full flex items-center justify-center">
              <img src="./bi_camera-fill.png" className="" alt="" />
            </div>
          </div>

          <div className="">
            {/* Other form fields */}
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Doctor's Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="w-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Doctor's Specialty</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="w-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Other Information</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <span className="mb-[-3px] text-gray-500 font-bold">
              Footer info
            </span>

            {/* Clinic Contacts Section */}
            <div>
              <div className="w-full">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Clinic Address</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              <div className="w-full">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Clinic Contact</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              <AddContacts />
            </div>

            {/* Clinic Contacts Section */}
            <div>
              <div className="w-full">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Clinic Email</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <AddEmailInput />
            </div>

            <AddTime />

            <CheckBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
