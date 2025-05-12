import React, { useState } from 'react';

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote(prev => ({ ...prev, [name]: value }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (note.title.trim() && note.content.trim()) {
      onAdd(note);
      setNote({ title: '', content: '' });
    }
  };

  return (
    <form
      onSubmit={submitNote}
      className="p-4 flex flex-col items-center bg-white shadow-md m-4 rounded-lg"
    >
      <input
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-2"
      />
      <textarea
        name="content"
        placeholder="Take a note..."
        rows="3"
        value={note.content}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default CreateArea;
