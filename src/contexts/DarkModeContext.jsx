import { createContext, useState } from 'react';

export const darkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <darkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            { children }
        </darkModeContext.Provider>
    )
}
