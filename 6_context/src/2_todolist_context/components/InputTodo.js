import { useContext, useState } from "react";
import {TodoContext} from "../TodoContext";
const InputTodo = (props) => {

        const value = useContext(TodoContext)
        
  const [todo, setTodo] = useState('TodoContext')

  const changeTodo = (e) => {
    setTodo(e.target.value)
  };

  const addHandler = () => {
          //props.addTodo(todo)
          value?.actions.addTodo(todo)
          setTodo('')
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addHandler()
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
