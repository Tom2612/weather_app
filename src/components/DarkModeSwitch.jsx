import { useContext } from 'react';
import { darkModeContext } from '../contexts/DarkModeContext';

export default function DarkModeSwitch() {
    const { darkMode, toggleDarkMode } = useContext(darkModeContext);

    return (
        <button className={darkMode ? 'color-mode-dark' : 'color-mode-light'} id='color-mode' onClick={toggleDarkMode}>
            {darkMode ? <span className="material-symbols-outlined">light_mode</span> : <span className="material-symbols-outlined">dark_mode</span>}
        </button>
    )
}
