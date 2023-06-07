import { TodoItem } from "./TodoItem";
import React from 'react'
export function TodoList(props) {
    console.log(props)
    const {todos,deleteTodo,toggleTodo} = props;
    return (
        <ul className="list">
            {todos.length  === 0 ? "No Todo" :
            todos.map((todo) => {
                return (

                    <TodoItem todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} key={todo.id}/>
                   
                );
            })}
        </ul>
    );
}
