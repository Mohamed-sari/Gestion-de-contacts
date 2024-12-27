import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContacts } from "../hooks/useContacts";

const AddContactPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const { addContact } = useContacts();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result); // Convert image to base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({
      id: Date.now(),
      name,
      username,
      number,
      profilePicture,
    });
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded shadow-lg space-y-6"
    >
      <h2 className="text-xl font-semibold text-gray-700">Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="space-y-3">
        <label className="block font-medium text-gray-600">Profile Picture</label>
        <div className="flex items-center space-x-4">
          <label
            htmlFor="profile-picture"
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Choose File
          </label>
          <input
            id="profile-picture"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          {profilePicture && (
            <img
              src={profilePicture}
              alt="Profile Preview"
              className="w-16 h-16 rounded-full object-contain border border-gray-300"
            />
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600"
      >
        Save
      </button>
    </form>
  );
};

export default AddContactPage;