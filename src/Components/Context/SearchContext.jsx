import { createContext, useState } from "react";

export const SearchContext = createContext(null);

export  const ContextProvider = (props) =>{
    //state variable which you want in any component
    const[isSearchVisible,setIsSearchVisible]= useState(false);
    return(
     <SearchContext.Provider value={{isSearchVisible,setIsSearchVisible}}>
        {props.children}
     </SearchContext.Provider>
    );
}
