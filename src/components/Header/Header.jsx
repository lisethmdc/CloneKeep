import React from "react";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import LightbulbIcon from '@mui/icons-material/Lightbulb';

import { MyHeader, Title, Logo } from "./styles";
import { useTheme, useUpdateTheme } from "../ThemeContext/ThemeContext";

export default function Header() {
  const darkTheme = useTheme();
  const toggleTheme = useUpdateTheme();

  const theme = {
    backgroundColor: darkTheme ? "#353535" : "#f5ba13",
    border: darkTheme && "solid 1px #f8f9fa",
  };

  return (
    <div>
      <MyHeader style={theme}>
        <Logo>

        <Title>Keep</Title>
        <LightbulbIcon sx={{ color: "white"}}/>
        </Logo>
        <div onClick={toggleTheme}> 
          {/* Hacemos un renderizado condicional */}
          {darkTheme ? (
            <LightModeIcon sx={{ color: "white" }} />
          ) : (
            <ModeNightIcon sx={{ color: "white" }} />
          )}
        </div>
      </MyHeader>
    </div>
  );
}
