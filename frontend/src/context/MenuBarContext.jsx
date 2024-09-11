import { createContext, useContext, useState } from "react";

const MenuBarContext = createContext();

function MenuBarContextProvider({ children }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <MenuBarContext.Provider value={{ isShow, setIsShow }}>
      {children}
    </MenuBarContext.Provider>
  );
}

//custom hook to use this Provider
function useMenuBarContext() {
  const context = useContext(MenuBarContext);
  if (context === undefined)
    throw new Error("Please use this context inside the Provider !");
  return context;
}

export { useMenuBarContext, MenuBarContextProvider };
