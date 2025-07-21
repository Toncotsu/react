import { useContext } from "react";
import CarryItem from "./carrylistitem";
import { CarryContext } from "./carryprovider";

const CarryList = () => {
  const { state, actions } = useContext(CarryContext);

  const items = state.carryList.map((item) => (
    <CarryItem
      key={item.no}
      carryItem={item}
      deleteCarry={actions.deleteCarry}
      toggleCarry={actions.toggleCarry}
    />
  ));

  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

export default CarryList;
