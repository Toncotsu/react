import { useEffect, useState } from "react";

function FunctionComp() {
  const [number, setNumber] = useState(0);


    useEffect(function(){

        console.log(' useEffect() 호출 ')

    })
  return (
    <div>
      <h3>함수형 컴포넌트</h3>
      <p> Number : {number} </p>
      <input
        type="button"
        value="눌려"
        onClick={() => {
          setNumber(Math.round(Math.random() * 100));
        }}
      />
    </div>
  );
}

export default FunctionComp;
