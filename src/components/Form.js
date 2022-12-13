import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const style = {
  form: `flex justify-between`,
  input: `border-2 p-2 w-full text-xl`,
  button: `border p-1 ml-2 bg-green-100`,
}

const Form = () => {
  return (
    <form className={style.form}>
      <input className={style.input} type='text' placeholder='Add Todo' />
      <button className={style.button}>
        <AiOutlinePlus size={30} />
      </button>
    </form>
  )
}

export default Form
