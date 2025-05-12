import React from 'react';

const Note = ({ title, content, id, onDelete }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h1 className="text-lg font-semibold">{title}</h1>
    <p className="text-gray-700">{content}</p>
    <button
      onClick={() => onDelete(id)}
      className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
    >
      Delete
    </button>
  </div>
);

export default Note;
