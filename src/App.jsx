import { useState, useEffect } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import React from 'react'
export default function App() {


  const [todos, setTodos] = useState([])


  useEffect(() =>{
   const localValues =  localStorage.getItem('item');
   if(localValues == null) setTodos([])

   setTodos(JSON.parse(localValues))
  },[])

  useEffect(() =>{
    localStorage.setItem('item', JSON.stringify(todos));
  },[todos])

  function toggleTodo(id, completed) {

    console.log("toggleTodo")
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {

          // todo.completed = completed

          // return todo
          return { ...todo, completed }
        }
        return todo
      })
    })

  }

  function deleteTodo(id) {

    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id) || []
    })

  }

  function addTodo(title) {

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })

  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header" >Todo list</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  )
}