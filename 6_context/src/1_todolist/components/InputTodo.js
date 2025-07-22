import { useState } from "react";

const InputTodo = (props) => {
  const [todo, setTodo] = useState('');

  const changeTodo = (e) => {
    setTodo(e.target.value);
  };

  const addHandler = () => {
    if (todo.trim() === '') return;
    props.addTodo(todo);
    setTodo('');
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addHandler();
    }
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group">
          <input
            type="text"
            id="msg"
            name="msg"
            value={todo}
            placeholder="여기에 입력"
            className="form-control"
            onChange={changeTodo}
            onKeyDown={handleKeyDown}  
          />
          <span className="btn btn-warning" onClick={addHandler}>
            [ 추가 ]
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputTodo;
