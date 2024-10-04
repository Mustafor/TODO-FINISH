import React, { useContext } from 'react'
import { Context } from '../Context/TodoContext'

const TodoForm = () => {
    const {todos, setTodos} = useContext(Context)

    function handleSubmitForm(e){
        e.preventDefault()
        const data = {
            id:todos.lenght + 1,
            value:e.target.todoValue.value
        }
        setTodos([...todos, data])
        e.target.reset()
    }
    return (
      <form onSubmit={handleSubmitForm} className='w-[600px] p-5 rounded-md bg-slate-400 mx-auto mt-5'  autoComplete='off'>
          <input className='p-2 rounded-tl-md rounded-bl-md w-[80%] outline-none' name='todoValue' placeholder='Enter your Todo' type="text" required/>
          <button className='w-[20%] bg-green-600 duration-300 hover:opacity-75 text-white font-semibold p-2 rounded-tr-md rounded-br-md'>Add</button>
      </form>
    )
}


export default TodoForm