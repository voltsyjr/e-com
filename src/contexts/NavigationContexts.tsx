import React, { useState } from "react";

import { types } from "../std_com/_imports";

const NavContext = React.createContext(null);

function NavContextProvider({ children }: { children: React.ReactNode }) {

  const [registeredNavs, setRegisteredNavs] = useState({});
  
  return (
    <NavContext.Provider value={{ registeredNavs, setRegisteredNavs }}>
      {children}
    </NavContext.Provider>
  );
}

export { NavContextProvider, NavContext };
