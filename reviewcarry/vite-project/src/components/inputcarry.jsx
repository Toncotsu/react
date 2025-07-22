import { useState } from "react";

const InputCarry = ({ addCarry }) => {
    
  const [carry, setCarry] = useState("");

  const changeCarry = (e) => setCarry(e.target.value);

  const addHandler = () => {
    if (carry.trim() === "") return;
    addCarry(carry);
    setCarry("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addHandler();
  };

  return (
    <div>
      <input
        type="text"
        value={carry}
        placeholder="여기에 캐리하세요"
        onChange={changeCarry}
        onKeyDown={handleKeyDown}
        className="form-control"
      />
            <button className="btn btn-warning" onClick={addHandler}>
                캐뤼
        </button>
    </div>
  );
};

export default InputCarry;
