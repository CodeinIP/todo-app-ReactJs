import React,{Fragment} from 'react'
import styles from '../components/todo.module.css';
import TodoItem from './Todoitem';



const Testtodo = () => {

  const [todos,setTodos] = React.useState([]);
  const [newtodo,setNewtodo] = React.useState("");
  const onDelete = (id)=>{
    
    let newtodos = todos.filter(todo=> todo.id !== id)
    setTodos(newtodos);
  }
  const handleChange = (e)=>{
    // setTodos(e.target.value);
    setNewtodo(e.target.value);
  }
  const handleClick = ()=>{
    // console.log(newtodo);
    let a = [...todos,{id:Date.now(),value:newtodo,status:false}];
    setTodos(a);
    setNewtodo("");
  }
  return(
    <div className={styles.mainbox}>
      <h1>Todo</h1>
      <input className={styles.inputbox} type="text" value={newtodo} onChange={handleChange}/>
      <button className={styles.addbtn} onClick={handleClick}>Add</button>
      <div className = {styles.todocontainer}>
        {todos.map((todo)=>(<div key={todo.id} >
          <TodoItem todo = {todo} onDelete = {()=>onDelete(todo.id)}/>
          </div>))}
        </div>
    </div>
  )
}
export default Testtodo;


