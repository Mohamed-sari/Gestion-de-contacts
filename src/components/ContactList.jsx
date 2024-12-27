import React from "react";
import { Link } from "react-router-dom";
import { useContacts } from "../hooks/useContacts";
import { MoreVertical, Search, Plus, Filter, ChevronDown } from 'lucide-react';

const ContactList = ({ contacts, onSelect, onSort, sortOrder }) => {
  const { deleteContact } = useContacts();

  return (
    <ul className="space-y-4">
      {contacts.map((contact) => (
        <li key={contact.id} className="bg-white shadow p-4 rounded flex items-center">
          <img
            src={contact.profilePicture}
            alt={contact.name}
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
          <div className="flex-1">
            <h2 className="text-lg font-bold">{contact.name}</h2>
            <p className="text-sm text-gray-500">@{contact.username}</p>
            <p className="text-sm text-gray-500">{contact.number}</p>
          </div>
          <Link
            to={`/edit/${contact.id}`}
            className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
          >
            Edit
          </Link>
          <button
            onClick={() => deleteContact(contact.id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
