import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const style = {
  li: `flex justify-between bg-slate-200 p-3 my-2`,
  li_complete: `flex justify-between bg-slate-400 p-3 my-2`,
  row: `flex justify-center`,
  text: `ml-2 cursor-pointer`,
  text_complete: `ml-2 curson-pointer line-through`,
  button: `cursor-pointer flex items-center`,
}

const Todo = ({ key, todo }) => {
  return (
    <li className={style.li}>
      <div className={style.row}>
        <input type='checkbox' />
        <p className={style.text}>{todo}</p>
      </div>

      <button className={style.button}>{<FaRegTrashAlt size={20} />}</button>
    </li>
  )
}

export default Todo
