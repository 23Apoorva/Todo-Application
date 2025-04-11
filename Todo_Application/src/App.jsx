import { useState, useRef } from 'react';
import './App.css'

function App() {
  let [todoList, setTodoList] = useState([]);
  let [errorMsg, setErrorMsg] = useState("");

  let inputRef = useRef();
  let saveTodo = (event) => {
    event.preventDefault();
    let e = event.target.list.value.trim();


     if (e === "") {
        return; 
     }
 

    if (!todoList.includes(e)) {
      let finalList = [...todoList, e]
      setTodoList(finalList);
      inputRef.current.value = "";
      setErrorMsg("");
    } else {
      setErrorMsg("⚠️ Task already exists!");
    }
  }

  let list = todoList.map((value, index) => {
    return (
      <ListItems value={value} key={index} indexNo={index} todoList={todoList} setTodoList={setTodoList} />
    )
  })
  
  return (
    <>
      <div className='TodoWrapper'>
        <h1>Todo Application</h1>
        <form onSubmit={saveTodo} className='TodoForm '>
          <input type="text" name='list' placeholder='Enter your task' ref={inputRef} className='todo-input' />
          <button className='todo-btn'>Save</button>
        </form>

         <p className="error">{errorMsg}</p>
        <div className='outerDiv'></div>
        <ul>
          {list}
        </ul>
      </div>
      
    </>
  )
}

export default App



function ListItems({ value, indexNo, todoList, setTodoList }) {

  let [status, setStatus] = useState(false);
  
  let deleteRow = () => {
    let FinalData = todoList.filter((v, i) => i != indexNo)
    setTodoList(FinalData);
  }

  let CheckStatus = () => {
    setStatus(!status)
  }
  return (
   <li className="Todo" onClick={CheckStatus}>
    <span className={status ? 'strike' : ''}>{value}</span>
    <span className='delete-btn' onClick={deleteRow}>&times;</span>
</li>
  )
}