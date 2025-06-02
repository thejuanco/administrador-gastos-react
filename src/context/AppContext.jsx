import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [budget, setBudget] = useState(null);
  const [spends, setSpends] = useState([]);
  const baseURL = "http://localhost:3000";

  useEffect(() => {
    fetch(`${baseURL}/api/getSpend`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  useEffect(() => {
    fetch(`${baseURL}/api/getBudget`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  //Obtener los datos del presupuesto
  const getBudget = async () => {
    fetch(`${baseURL}/api/getBudget`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const createBudget = async (data) => {
    try {
      const response = await fetch(`${baseURL}/api/createBudget`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const getSpend = () => {
    fetch(`${baseURL}/api/getSpend`)
      .then((res) => res.json())
      .then((data) => setBudget(data));
  };

  return (
    <AppContext.Provider value={{ getBudget, createBudget, getSpend }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
