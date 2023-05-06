"use client"

import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    
    const [categories,setCategories] = useState([]);
    
    return (
        <GlobalContext.Provider value={{ categories,setCategories }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);