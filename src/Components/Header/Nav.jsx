import React from "react";
import styles from './Header.module.css'
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useDarkMode } from "../Darkmode/DarkModeContext";



export default function Nav({filters, filter, onFilterChange}) {
    const { isDarkMode, toggleDarkMode } = useDarkMode()
    return (
        <header className={`${styles.header} ${
            isDarkMode&&styles.dark
        }`}>
            <button
            className={styles.toggle}
            onClick={toggleDarkMode}>
               {isDarkMode? <FiSun /> : <FaMoon /> }
            </button>
            <ul className={styles.filters}>

                {filters.map((value, index) => <li key={index}>
                    <button className={`${styles.filter} ${
                        filter === value && styles.selected
                    }`} onClick={() => onFilterChange(value)}>{value}</button>
            </li>)}
            </ul>
        </header>
    )
}