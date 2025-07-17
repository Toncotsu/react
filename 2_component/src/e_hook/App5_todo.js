
import { useCallback, useState,useMemo } from 'react';
import '../App.css'

const App =  () => {

    const [todo, setTodo] = useState('');
    const [todolist, setTodolist] = useState([]);

    const addTodo = useCallback((todo) => {
            const Newtodolist = {
            id: new Date().getTime(), 
            text: todo }
            setTodolist(prev => [...prev, Newtodolist])
    },[setTodolist])
    
    const getTodolistCount = useMemo(() => {
    return todolist.length;
     }, [todolist]);
    
    const deleteTodo = useCallback((id) => {
           setTodolist(prev => prev.filter(item => item.id !== id));
    },[setTodolist])
     return(
        <div className="App">
          <input type = 'text'onChange={((e)=>{
            setTodo(e.target.value)
          })}></input>  
        <button onClick={()=>{
            addTodo(todo)
        }}>할 일 추가</button>
            <hr/>
            <div className='App-subtitle'> 남은 할일 개수 : {getTodolistCount}</div>
                 <ul>
                 {todolist.map((item) => (
                  <li key={item.id}>
                            {item.text}
                     <button onClick={() => deleteTodo(item.id)}>삭제</button>
                 </li>
                 ))}              
                 </ul>
            </div>
    )
}

export default App;
  

//   const deleteTodo = (id) => {
//     const idx = todoList.findIndex(item => item.id === id);
//     if (idx === -1) return; // 못 찾았으면 리턴

//     const newTodoList = [...todoList];
//     newTodoList.splice(idx, 1);

//     setTodoList(newTodoList);
//   };