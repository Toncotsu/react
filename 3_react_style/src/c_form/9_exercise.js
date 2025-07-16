
// import { useState } from "react";

// const App = () => {
    
//     const exChangeRate = 1381.34;
//     const [won,setWon] = useState(0)
//     const [usd,setUsd] = useState(0)

// const handleWonChange = (e) => {

//     const wonValue = parseFloat(e.target.value) ||0;
//     setWon(wonValue);
//     setUsd((wonValue / exChangeRate).toFixed(2));
// }

// const handleUsdChange = (e) => {

//         const usdValue = parseFloat(e.target.value) ||0;
//         setUsd(usdValue);
//         setWon((usdValue * exChangeRate).toFixed(0));
// }
//         return(
//             <div>
//                 <h2>환율계산기</h2>
//                 원화 : <input type ='text' value={won} onChange={handleWonChange}/><br/>
//                 달러 : <input type ='text' value={usd} onChange={handleUsdChange}/><hr/>               
//             </div>
//         )

// }

// export default App

import { useState } from "react";

const App = () => {
    
  const exChangeRate = 1381.34;
  const [input, setInput] = useState({ won: 0, usd: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const num = parseFloat(value) || 0;

    setInput({
      won: name === "won" ? num : (num * exChangeRate).toFixed(0),
      usd: name === "usd" ? num : (num / exChangeRate).toFixed(2)
    });
  };

  return (
    <div>
      <h2>환율 계산기</h2>

      원화 : <input type="text" name="won" value={input.won} onChange={handleChange} /><br />
      달러 : <input type="text" name="usd" value={input.usd} onChange={handleChange} /><br />

    </div>
  );
};

export default App;
