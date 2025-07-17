import { useState } from "react";

function App() {
  const [title, setTitle] = useState(['맛집1', '맛집2', '맛집3']);

  const newItem = ['호남식당2', '학식2', '짬봉집2'];

  return (
    <div>
      <div>{title.join(', ')}</div>

      <button onClick={() => {
        setTitle(['변경1', '변경2', '변경3']);
      }}>변경</button>

      <hr />

      <ul>
        {
          title.map((item, idx) => (
            <li key={idx} onClick={() => {
              const copy = [...title];     
              copy[idx] = newItem[idx];    
              setTitle(copy);              
            }}>
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
