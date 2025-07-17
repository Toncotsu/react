import { useState, useRef } from "react";
import '../App.css'
import produce from 'immer';


const App = () => {
  const [user, setUser] = useState({
    userid: 'ㅋㄹ',
    username: 'ㅋㄹㅋ',
    email: 'carry@naver.com'
  });

  const [data, setData] = useState({
    array: [],
    other: null
  });

  const nextId = useRef(1); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const info = {
      id: nextId.current,              
      userid: user.userid,
      username: user.username,
      email: user.email
    };

    setData(prevData => ({
      ...prevData,
      array: prevData.array.concat(info)
    }));

    setUser({ userid: '', username: '', email: '' });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    //setData(prev => ({...prev, array: prev.array.filter(item => item.id !== id)}));
    setData(produce(data, draft => {
    const index = draft.array.findIndex(info => info.id === id);
    if (index !== -1) {
      draft.array.splice(index, 1); 
    }
  }));
  };

  return (
    <div>
      <form className="App" onSubmit={onSubmit}>
        <input name="userid" placeholder="아이디" value={user.userid} onChange={handleChange} /><br />
        <input name="username" placeholder="이름" value={user.username} onChange={handleChange} /><br />
        <input name="email" placeholder="이메일" value={user.email} onChange={handleChange} /><br />
        <button type="submit">등록</button>
      </form>

      <ul>
        {data.array.map((item) => (
          <li key={item.id} onClick={() => onRemove(item.id)}>
            {item.userid} / {item.username} / {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
