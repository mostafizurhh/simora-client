import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const themes = {
    dark: {
        backgroundColor: "#260930",
        color: "white"
    },
    light: {
        backgroundColor: "white",
        color: "black"
    }
};

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false)
    const theme = isDark ? themes.dark : themes.light;
    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;