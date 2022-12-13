import React, { useState } from 'react'
import Form from './components/Form'
import Todo from './components/Todo'

//tailwind styling
const style = {
  bg: `h-screen w-screen p-5 bg-gradient-to-r from-[#FFD580] to-[#ADD8E6]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  count: `text-center text-2xl p-3`,
}

function App() {
  const [todos, setTodos] = useState(['Learn React', 'Grind Leetcode'])
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <Form />

        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>

        <p className={style.count}>You have 2 tasks to complete</p>
      </div>
    </div>
  )
}

export default App
