import React from "react";
import { useState } from "react";

const AddContacts = () => {
  const [clinicContacts, setClinicContacts] = useState([""]); // Initial contact input

  // Handle adding a new contact input field
  const addContact = () => {
    setClinicContacts([...clinicContacts, ""]); // Add a new empty input
  };

  // Handle removing a specific contact input field
  const removeContact = (index) => {
    const updatedContacts = clinicContacts.filter((_, i) => i !== index); // Remove the contact at the specified index
    setClinicContacts(updatedContacts);
  };

  // Handle input value changes for specific contacts
  const handleContactChange = (index, value) => {
    const updatedContacts = [...clinicContacts];
    updatedContacts[index] = value; // Update the specific contact
    setClinicContacts(updatedContacts);
  };
  return (
    <div>
      {clinicContacts.map((contact, index) => (
        <div key={index} className="mb-4 flex flex-col items-start">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Clinic contact {index + 1}</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={contact}
              onChange={(e) => handleContactChange(index, e.target.value)}
            />
          </label>
          {/* Remove Button */}
          <button
            type="button"
            onClick={() => removeContact(index)}
            className="btn btn-active text-red-600 btn-link"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Button to add more contacts */}
      <button
        type="button"
        onClick={addContact}
        className="btn btn-active btn-link"
      >
        Add Another Contact
      </button>
    </div>
  );
};

export default AddContacts;
