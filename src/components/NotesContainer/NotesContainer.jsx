import React, { useState } from "react";
import CreateArea from "../CreateArea/CreateArea";
import Note from "../Note/Note";


export default function NotesContainer() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    console.log(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        console.log(index);
        return index !== id;
      });
    });
  };

  const handleUpdateNote = ({ id, title, content }) => {
    const editedNotes = notes.map((note, index) => {
      console.log(`esto es la nota ${note} y tiene ${index}`);
      if (index === id) {
        return { id, title, content };
      } else {
        return note;
      }
    });
    setNotes(editedNotes);
  };

  return (
    <div>
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return (
          
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              deleteNote={deleteNote}
              handleUpdateNote={handleUpdateNote}
            />
          
        );
      })}
    </div>
  );
}
