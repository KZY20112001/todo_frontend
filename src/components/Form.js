import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { db } from '../firebase'

const style = {
  form: `flex justify-between`,
  input: `border-2 p-2 w-full text-xl`,
  button: `border p-1 ml-2 bg-green-100`,
}

const Form = () => {
  //create todo
  const [input, setInput] = useState('')

  const createTodo = async (e) => {
    e.preventDefault()
    if (input == '') {
      alert('Please enter a valid todo')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    })
    setInput('')
  }

  return (
    <form onSubmit={createTodo} className={style.form}>
      <input
        className={style.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
        placeholder='Add Todo'
      />
      <button className={style.button}>
        <AiOutlinePlus size={30} />
      </button>
    </form>
  )
}

export default Form
