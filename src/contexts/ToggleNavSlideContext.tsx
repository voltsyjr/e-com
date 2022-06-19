import React, { useState } from 'react'

type NavSlideContextType = {
    show : boolean, 
    setShow : React.Dispatch<React.SetStateAction<boolean>>
}

const NavSlideContext = React.createContext<NavSlideContextType | null>(null); 

function ToggleNavSlideProvider({children} : {children : React.ReactNode}) {
  const [show, setShow] = useState(false); 
  return (
    <NavSlideContext.Provider value={{show, setShow}} >
        {children}
    </NavSlideContext.Provider>
  )
}

export {ToggleNavSlideProvider, NavSlideContext}; 