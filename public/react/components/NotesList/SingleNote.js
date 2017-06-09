import React from 'react';

import Button from '../globals/Button';

const SingleNote = ({ note, onEdit, onDelete }) => {
  return (
    <div className="single-note">
      <h3>{note.title}</h3>
      <p>{note.text}</p>
      <Button
        text="Edit"
        className="blue"
        onClick={(e) => {
          e.preventDefault();
          onEdit(note);
        }}
      />
      <Button
        text="Delete"
        className="red"
        onClick={(e) => {
          e.preventDefault();
          onDelete(note);
        }}
      />
    </div>
  );
};

export default SingleNote;
