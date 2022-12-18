import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FaRegTimesCircle } from 'react-icons/fa'

const style = {
  li: `flex justify-between bg-slate-200 p-3 my-2`,
  li_complete: `flex justify-between bg-slate-400 p-3 my-2`,
  row: `flex justify-center`,
  text: `ml-2 cursor-pointer capitalize`,
  text_complete: `ml-2 curson-pointer line-through capitalize`,
  button: `cursor-pointer flex items-center`,
}

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.li_complete : style.li}>
      <div className={style.row}>
        <input
          type='checkbox'
          onChange={() => toggleComplete(todo)}
          checked={todo.completed ? 'checked' : ''}
        />
        <p className={todo.completed ? style.text_complete : style.text}>
          {todo.text}
        </p>
      </div>

      <button className={style.button} onClick={() => deleteTodo(todo.id)}>
        {<FaRegTrashAlt size={20} />}
      </button>
    </li>
  )
}

export default Todo
