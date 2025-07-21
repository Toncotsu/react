import { createContext, useState } from "react";

const CarryContext = createContext();

const CarryProvider = ({ children }) => {

  const [carryList, setCarryList] = useState([
    { no: 1, carry: "캐리하기", done: false },
    { no: 2, carry: "십캐리하기", done: false },
    { no: 3, carry: "아또당", done: false },
  ]);

const addCarry = (text) => {

    const newItem = {
        
        no: carryList.length + 1, 
        carry: text,
        done: false
  };

  setCarryList([...carryList, newItem]);
};
  const deleteCarry = (no) => {
    setCarryList(carryList.filter(item => item.no !== no));
  };

  const toggleCarry = (no) => {
    const newList = carryList.map(item =>
      item.no === no ? { ...item, done: !item.done } : item
    );
    setCarryList(newList);
  };

  const value = {
    state: { carryList },
    actions: { addCarry, deleteCarry, toggleCarry },
  };

  return (
    <CarryContext.Provider value={value}>
      {children}
    </CarryContext.Provider>
  );
};

export { CarryContext };
export default CarryProvider;
