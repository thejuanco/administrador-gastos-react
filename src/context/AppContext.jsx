import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [budget, setBudget] = useState({});
  const [spends, setSpends] = useState([]);
  const baseURL = "http://localhost:3000";

  useEffect(() => {
    fetch(`${baseURL}/api/getSpend`)
      .then((response) => response.json())
      .then((data) => {
        setSpends(data)
    });
  }, []);

  useEffect(() => {
    fetch(`${baseURL}/api/getBudget`)
      .then((response) => response.json())
      .then((data) => {
        setBudget(data)
    });
  }, []);

  //Obtener los datos del presupuesto
  const createBudget = async (data) => {
    try {
      const response = await fetch(`${baseURL}/api/createBudget`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      await response.json();
      // setBudget(prevBudget => [...prevBudget, data])
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBudget = async (id) => {
    try {
      const response = await fetch(`${baseURL}/api/deleteBudget/${id}`, {
        //Cuando es eliminar no lleva body ya que no se envia nada al servidor
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      await response.json();
    } catch (error) {
      console.log(error)
    }
  }

  const getBudget = async () => {
    fetch(`${baseURL}/api/getBudget`)
      .then((res) => res.json())
      .then((data) => setBudget(data));
  }

  const createSpend = async (data) => {
    try {
      const response = await fetch(`${baseURL}/api/createSpend`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })

      return await response.json()
    } catch (error) {
      console.log(error)
    }
  }

  

  return (
    <AppContext.Provider value={{ createBudget, setBudget, budget, deleteBudget, spends, createSpend }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
