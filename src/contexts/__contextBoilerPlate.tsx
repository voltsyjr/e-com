import React, { useState } from "react";

import { types } from "../std_com/_imports";

const Context = React.createContext(null);

function Provider({ children }: { children: React.ReactNode }) {

  const [navDetailsMap, setNavDetailsMap] = useState({});

  return (
    <Context.Provider value={{ navDetailsMap, setNavDetailsMap }}>
      {children}
    </Context.Provider>
  );
}

export { Provider, Context };
