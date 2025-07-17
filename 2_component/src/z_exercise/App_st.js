import { useState } from "react";
import '../App.css';

// 개별 카운터 컴포넌트
const MyCount = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={onDecrement}>▼</button>
      <span>{count}</span>
      <button onClick={onIncrement}>▲</button>
    </div>
  );
};

// 메뉴 컴포넌트
const MyMenu = () => {
  const [menu, setMenu] = useState(['사과', '배', '귤']);
  const [counts, setCounts] = useState([0, 0, 0]);

  const increment = (idx) => {
    const newCounts = [...counts];
    newCounts[idx]++;
    setCounts(newCounts);
  };

  const decrement = (idx) => {
    const newCounts = [...counts];
    newCounts[idx] = Math.max(newCounts[idx] - 1, 0);
    setCounts(newCounts);
  };

  return (
    <div>
      <h3>[ 연습 - 2 ]</h3>
      <h4>MyMenu 컴포넌트</h4>
      {menu.map((item, idx) => (
        <div key={idx}>
          <div>{item}</div>
          <MyCount
            count={counts[idx]}
            onIncrement={() => increment(idx)}
            onDecrement={() => decrement(idx)}
          />
        </div>
      ))}
    </div>
  );
};

export default MyMenu;
