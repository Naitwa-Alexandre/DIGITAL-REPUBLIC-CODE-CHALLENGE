import React, { useState, useContext, createContext } from 'react';
import { checkRootSquad, inkCalc } from './assets/utils';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [result, setResult] = useState(0);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);

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
    const { id, name, value } = e.target;

    setFormState(state => {
      return {
        ...state,
        [id]: {
          ...state[id],
          [name]: Number(value)
        }
      }
    });
  }

  const handleClick = (e) => {
    e.preventDefault();
    const rootSquadChecked = checkRootSquad(formState, setError);
    if (typeof rootSquadChecked == 'string') {
      setError(rootSquadChecked);
    } else {
      const finalResult = inkCalc(rootSquadChecked);
      setResult(finalResult);
    }
    setShow(true);
  }
  
  return <AppContext.Provider
    value={{
      formState,
      toggle,
      result,
      show,
      error,
      setFormState,
      setToggle,
      handleToggle,
      handleChange,
      handleClick,
    }}
  >
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };