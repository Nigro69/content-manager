import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#FFD700	');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  //Levels
  const [admin, setAdmin]=useState(true);
  const [manager, setmanager] = useState(false);
  const [editor, seteditor] = useState(false);
  const [guestWriter, setguestWriter]=useState(false);

  // attributes for manager to customize post

  const [manageblog, setmanageblog] = useState({
    WriterName:true,
    Image:true,
    Badge:true,
    ReadingTime:true,
    PublishDate:true,
    CategoryLabel:true,
    MoreActionMenu:true,
    CommentsCounter:true,
    Description:true,
    ViewCounter:true,
    LikesCounter:true,
    Tags:true,

  });

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{manageblog,setmanageblog,manager,setmanager,setguestWriter,guestWriter,editor,seteditor, admin, setAdmin, currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);