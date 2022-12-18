import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Todo from './components/Todo'
import { db } from './firebase'
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore'

//tailwind styling
const style = {
  bg: `h-screen w-screen p-5 bg-gradient-to-r from-[#FFD580] to-[#ADD8E6]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  count: `text-center text-2xl p-3`,
}

function App() {
  const [todos, setTodos] = useState([])

  //read todo from firebase backend
  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      })
      setTodos(todosArr)
    })
    return () => unsubscribe()
  }, [])

  //update todo
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    })
  }

  //delete
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <Form />

        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>{`You have ${todos.length} todos`}</p>
        )}
      </div>
    </div>
  )
}

export default App
