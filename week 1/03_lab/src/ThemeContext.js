import React from "react";

const ThemeContext = React.createContext(undefined)

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = React.useState("light")

    return <ThemeContext.Provider value={{
        theme: theme, toggleTheme: () => {
            theme === "light" ? setTheme("dark") : setTheme("light")
        }
    }}>
        {children}
    </ThemeContext.Provider>

};

export const useTheme = () => React.useContext(ThemeContext);
