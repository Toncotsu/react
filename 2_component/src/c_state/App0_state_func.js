import React, { useState } from "react";

const FunctionComponent = () => {
    
  const [number, setNumber] = useState(100);

  return (
    <div>
      <h3>함수 컴포넌트</h3>
      <p>숫자 : {number}</p>
      <hr />
      <input
        type="button"
        value="+1"
        onClick={() => setNumber(number + 1)}
      />
      <input
        type="button"
        value="Random"
        onClick={() => setNumber(Math.ceil(Math.random() * 100))}
      />
      <input
        type="button"
        value="-1"
        onClick={() => setNumber(number - 1)}
      />
    </div>
  )
}

export default FunctionComponent;
