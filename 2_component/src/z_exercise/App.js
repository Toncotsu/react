import { useState } from "react";
import '../App.css';

const Mycount = () => {
    
  const [number, setNumber] = useState(0);

  return (

    <div className="counter">
      <button onClick={() => setNumber(prev => prev - 1)} 
                             disabled={number <= 0}>▼</button>
      <div className="number">{number}</div>
      <button onClick={() => setNumber(prev => prev + 1)}>▲</button>
    </div>

  );
};

const MyMenu = () => {
  const menu = ['사과', '배', '귤'];

  return (
    
    <div className="menu-container">
    <div className="menu-title">오늘의 과일</div>
      {menu.map((item, idx) => (
        <div key={idx} className="menu-item">
          <div className="fruit-name">{item}</div>
          <Mycount />
        </div>
      ))}
    </div>
    
  );
};

export default MyMenu;
