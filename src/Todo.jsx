import React, { useSyncExternalStore } from 'react'
import { useState } from 'react';

const Todo = () => {

    const [todos,setTodos] = useState([])

    const [inputValue,setInputValue] = useState('');

    const [edittodo,setEditTodo] = useState(false);

    const [editId,setEditId] = useState(null);

    const [editValue,setEditValue] = useState('');

    const addTodo = () =>{
        if(inputValue.trim() !== ""){
            const newTodo = {
                id: new Date().getTime(),
                text: inputValue,
            }
            setTodos([...todos,newTodo]);
            setInputValue('');
        }
    }

    const deleteTodo = (id)=>{
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos)
    }

    const editTodos = (id,text) =>{
        setEditTodo(true);
        setEditId(id);
        setEditValue(text);
    }

    const updateTodo = () =>{
        const updatedTodos = todos.map((todo)=>{
            if(todo.id === editId){
                return {...todo,text:editValue}
            }
            return todo;
        })
        setTodos(editTodos);
        setEditTodo(false);
        setEditId(null)
        setEditValue('')
    }


  return (
    <div className='todo-container'>
      <h1>ToDo List</h1>
      <input type='text' value={inputValue} onChange={(e)=> setInputValue(e.target.value) }/>
      <button onClick={addTodo}>Add</button>
      <ul>
        {
            todos.map((todo)=>(
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
                    <button onClick={()=> editTodos(todo.id,todo.text)}>Update</button>
                </li>
            ))
        }
      </ul>
    </div>
  )
  
}

export default Todo
