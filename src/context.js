import React, { useState, useContext, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [toggle, setToggle] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });

  const [formState, setFormState] = useState({
    wall1: {
      window: '',
      port: '',
      width: '',
      height: '',
    },
    wall2: {
      window: '',
      port: '',
      width: '',
      height: '',
    },
    wall3: {
      window: '',
      port: '',
      width: '',
      height: '',
    },
    wall4: {
      window: '',
      port: '',
      width: '',
      height: '',
    },
  });

  const handleToggle = (e) => {
    setToggle((toggle) => {
      return {
        ...toggle,
        [e.target.id]: !toggle[e.target.id],
      }
    });
  }

  const handleChange = (e) => {
    const id = e.target.id;
    const name = e.target.name;
    const value = Number(e.target.value);

    setFormState(state => {
      return {
        ...state,
        [id]: {
          ...state[id],
          [name]: value
        }
      }
    });
  }

  console.log(formState);
  
  return <AppContext.Provider
    value={{
      formState,
      setFormState,
      toggle,
      setToggle,
      handleToggle,
      handleChange,
    }}
  >
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };