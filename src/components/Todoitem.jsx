import React from 'react'
import styles from '../components/todo.module.css'
const TodoItem = ({todo,onDelete}) => {
    const [status,setstatus] = React.useState(todo.status);
  return (
    <React.Fragment>
        <div className={(status ? (styles.todolistbox,styles.striked):styles.todolistbox)}>{todo.value}</div>
        <input className={styles.checkbox} type="checkbox" onChange = {(e)=>(setstatus(e.target.checked))}  />
        <button className={styles.delete} onClick = {()=> onDelete(todo.id)} >X</button>

    </React.Fragment>
  )
}

export default TodoItem;
