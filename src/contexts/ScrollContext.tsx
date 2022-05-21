import React from "react";

type prop = {
  children: React.ReactNode;
};

const ScrollContext = React.createContext(null);

function ScrollContextProvider({ children }: prop) {
  
  return (
    <ScrollContext.Provider value={null}>{children}</ScrollContext.Provider>
  );
}

export { ScrollContext, ScrollContextProvider };
