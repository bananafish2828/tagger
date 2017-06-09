import React from 'react';

import SingleNote from './SingleNote';

const NotesList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="notes-list">
      <h2>Notes List</h2>
      {notes.map((note, idx) => (
        <SingleNote
          note={note}
          key={`single-note-id-${note.id}-idx-${idx}`}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NotesList;
