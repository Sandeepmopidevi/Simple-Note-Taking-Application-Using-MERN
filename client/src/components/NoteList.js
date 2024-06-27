import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div>
      {notes.map(note => (
        <NoteItem key={note._id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
