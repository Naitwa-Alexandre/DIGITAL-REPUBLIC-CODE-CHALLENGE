import React, { createContext } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  return (<FormContext.Provider value={'hello-world'}>
    {children}
  </FormContext.Provider>)
}

// export const useGlobalContext = () => {
//   return useContext(FormContext);
// }