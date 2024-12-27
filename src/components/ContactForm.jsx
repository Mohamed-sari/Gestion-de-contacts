import React, { useState } from "react";

const ContactForm = ({ initialValues = {}, onSubmit, formTitle = "Contact Form" }) => {
  const [name, setName] = useState(initialValues.name || "");
  const [username, setUsername] = useState(initialValues.username || "");
  const [info, setInfo] = useState(initialValues.info || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, username, info });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">{formTitle}</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-gray-300 rounded px-3 py-2"
          placeholder="Enter name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border-gray-300 rounded px-3 py-2"
          placeholder="Enter username"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Info</label>
        <textarea
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          className="w-full border-gray-300 rounded px-3 py-2"
          placeholder="Enter additional info"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  );
};

export default ContactForm;
