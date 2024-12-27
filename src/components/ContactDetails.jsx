import React from "react";

const ContactDetails = ({ contact, onEdit, onDelete }) => {
  if (!contact) {
    return <p className="text-gray-500">No contact selected.</p>;
  }

  return (
    <div className="bg-white shadow rounded p-6">
      <div className="flex items-center">
        <div className="h-16 w-16 bg-gray-200 rounded-full mr-4"></div>
        <div>
          <h2 className="text-xl font-bold">{contact.name}</h2>
          <p className="text-sm text-gray-500">@{contact.username}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{contact.info || "No additional info provided."}</p>
      <div className="mt-6 flex space-x-4">
        <button
          onClick={onEdit}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactDetails;
