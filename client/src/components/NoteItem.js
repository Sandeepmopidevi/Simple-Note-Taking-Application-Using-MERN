// components/NoteItem.js
import React from 'react';

const NoteItem = ({ note, deleteNote }) => {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note._id)}>Delete</button>
    </div>
  );
};

export default NoteItem;
