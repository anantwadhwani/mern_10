import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prev => [...prev, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter((note, index) => index !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
