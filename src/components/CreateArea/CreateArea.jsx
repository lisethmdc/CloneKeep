import React, { useState } from "react";
import * as S from "./styles";
import { useTheme } from "../ThemeContext/ThemeContext";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

export default function CreateArea({ addNote }) {
  const [noteText, setNoteText] = useState({
    title: "",
    content: "",
  });

  const [error, setError] = useState(null);
  const [expandedNote, setExpandedNote] = useState(false);

  const darkTheme = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNoteText((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!title || !content) {
      console.log("Debes rellenar todos los campos");
      setError("Debes rellenar todos los campos");
      return;
    } else {
      setError(null);
    }
    addNote(noteText);
    setNoteText({
      title: "",
      content: "",
    });
  };

  const { title, content } = noteText;

  const inputStyles = {
    backgroundColor: darkTheme ? "#353535" : "#f5f6f7",
    color: darkTheme ? "#eee" : "black",
  };

  return (
    <div>
      <S.Formulario>
        {expandedNote && (
          <S.NoteTitle
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Title"
            style={inputStyles}
          />
        )}
        <S.NoteContent
          type="text"
          name="content"
          value={content}
          onChange={handleChange}
          placeholder="Take a note"
          style={inputStyles}
          onClick={() => {
            setExpandedNote(true);
          }}
        />
        <S.Error>{error}</S.Error>
        <S.IconContainer>
          <Fab onClick={handleClick} sx={{ width: 45, height: 45 }}>
            <AddIcon />
          </Fab>
        </S.IconContainer>
      </S.Formulario>
    </div>
  );
}
