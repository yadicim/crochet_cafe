import { createContext, useReducer, useState } from "react";

export const ThemeContext = createContext();
export const SearchContext = createContext();

const INITIAL_STATE = { lightMode: true }; 

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { lightMode: !state.lightMode }; 
    default:
      return state;
  }
};

export const CombinedContextProvider = ({ children }) => {
  // Tema Yönetimi
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  // Arama Yönetimi
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        {children}
      </SearchContext.Provider>
    </ThemeContext.Provider>
  );
};