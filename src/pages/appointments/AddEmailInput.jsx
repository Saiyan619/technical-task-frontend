import React, { useState } from "react";

const AddEmailInput = () => {
  const [clinicEmails, setClinicEmails] = useState([""]); 

  // Handle adding a new contact input field
  const addEmail = () => {
    setClinicEmails([...clinicEmails, ""]); // Add a new empty input
  };

  // Handle removing a specific contact input field
  const removeEmails = (index) => {
    const updatedEmails = clinicEmails.filter((_, i) => i !== index); // Remove the contact at the specified index
    setClinicEmails(updatedEmails);
  };

  // Handle input value changes for specific contacts
  const handleEmailChange = (index, value) => {
    const updatedEmails = [...clinicEmails];
    updatedEmails[index] = value; // Update the specific contact
    setClinicEmails(updatedEmails);
  };
  return (
    <div>
      {clinicEmails.map((contact, index) => (
        <div key={index} className="mb-4 flex flex-col items-start w-full">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Clinic contact {index + 1}</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              value={contact}
              onChange={(e) => handleEmailChange(index, e.target.value)}
            />
          </label>
          {/* Remove Button */}
          <button
            type="button"
            onClick={() => removeEmails(index)}
            className="btn btn-active btn-link text-red-600"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Button to add more contacts */}
      <button
        type="button"
        onClick={addEmail}
        className="btn btn-active btn-link"
      >
        Add Another Contact
      </button>
    </div>
  );
};

export default AddEmailInput;
