import React, { useState } from "react";
import { MyNote, NoteTitle, NoteText, EditInput, Button, CancelButton, SaveButton } from "./styles";
import { useTheme } from "../ThemeContext/ThemeContext";

export default function Note({
  id,
  title,
  content,
  deleteNote,
  handleUpdateNote,
}) {
  const [currentNote, setCurrentNote] = useState({
    id: id,
    editTitle: title,
    editContent: content,
  });
  const [editNote, setEditNote] = useState(false);

  const darkTheme = useTheme();

  const handleDelete = () => {
    deleteNote(id);
  };

  const handleEdit = () => {
    setEditNote(true);
    setCurrentNote((prevValue) => ({ ...prevValue }));
  };

  const handleInputEdit = (e) => {
    const { name, value } = e.target;

    setCurrentNote((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const updateNote = () => {
    handleUpdateNote({
      id: currentNote.id,
      title: currentNote.editTitle,
      content: currentNote.editContent,
    });
    setEditNote(false);
  };

  const { editTitle, editContent } = currentNote;

  const noteStyles = {
    backgroundColor: darkTheme ? "#353535" : "#f5f6f7",
    color: darkTheme ? "#eee" : "black",
    border: darkTheme && "solid 1px #eee",
  };

  return (
    <>
      {editNote ? (
        <MyNote style={noteStyles}>
          <EditInput
            type="text"
            name="editTitle"
            value={editTitle}
            onChange={handleInputEdit}
            style={noteStyles}
          />
          <EditInput
            type="text"
            name="editContent"
            value={editContent}
            onChange={handleInputEdit}
            style={noteStyles}
          />
          <SaveButton onClick={updateNote}>SAVE</SaveButton>
          <CancelButton onClick={() => setEditNote(false)}>CANCEL</CancelButton>
        </MyNote>
      ) : (
        <MyNote style={noteStyles} onDoubleClick={handleEdit}>
          <NoteTitle>{title}</NoteTitle>
          <NoteText>{content}</NoteText>
          <Button onClick={handleDelete}>DELETE</Button>
        </MyNote>
      )}
    </>
  );
}
