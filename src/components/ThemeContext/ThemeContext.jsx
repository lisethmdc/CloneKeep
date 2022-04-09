import React, { useState, useEffect, useContext } from 'react';

//Creamos nuestros custom hooks
export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext)
};

export const useUpdateTheme = () => {
    return useContext(ThemeUpdateContext)
 };

export default function MyThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect (() => {
        document.body.style.backgroundColor = darkTheme ? "#353535" : "#f5f6f7"
    },[darkTheme])

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <div>
            <ThemeContext.Provider value={darkTheme}>
                <ThemeUpdateContext.Provider value={toggleTheme}>
                    {children}
                </ThemeUpdateContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}
