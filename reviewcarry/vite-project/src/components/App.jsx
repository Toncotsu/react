import React, { useContext } from "react";
import InputCarry from "./inputcarry";
import CarryList from "./carrylist";
import { CarryContext } from "./carryprovider";

const App = () => {
  const { state, actions } = useContext(CarryContext);

  return (
    <div className="container">
      <h2>Carry App</h2>
      <InputCarry addCarry={actions.addCarry} />
      <CarryList
        carryList={state.carryList}
        deleteCarry={actions.deleteCarry}
        toggleCarry={actions.toggleCarry}
      />
    </div>
  );
};

export default App;
