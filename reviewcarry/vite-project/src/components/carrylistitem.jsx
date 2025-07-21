const CarryItem = ({ carryItem, deleteCarry, toggleCarry }) => {
  return (
    <li>
      <span
        onClick={() => toggleCarry(carryItem.no)}
        style={{
          textDecoration: carryItem.done ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {carryItem.carry}
      </span>
      <button onClick={() => deleteCarry(carryItem.no)}>삭제</button>
    </li>
  );
};

export default CarryItem;
