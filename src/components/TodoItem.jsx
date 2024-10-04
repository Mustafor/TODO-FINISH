import React, { useContext } from 'react';
import Modal from './Modal';
import { Context } from '../Context/TodoContext';

const TodoItem = ({ item, index, hadnleUpdateClick, handleMoreBtnClick}) => {
    const {todos, setTodos} = useContext(Context)
    function handleDeleteBtnClick(id) {
        const deleteIndex = todos.findIndex(item => item.id == id)
        todos.splice(deleteIndex, 1)
        setTodos([...todos]);
    }

    return (
        <>
        <li className='p-2 rounded-md bg-white flex items-center justify-between'>
            <div className='flex items-center'>
                <span>{index + 1}.</span>
                <strong>{item.value}</strong>
            </div>
            <div className='flex space-x-2'>
                <button id={item.id} onClick={hadnleUpdateClick} className='p-2 rounded-md font-semibold border-[2px] hover:bg-transparent border-blue-600 duration-300 hover:text-blue-600 bg-blue-600 text-white'>Update</button>
                <button onClick={() => handleDeleteBtnClick(item.id)} className='p-2 rounded-md border-[2px] duration-300 hover:text-red-600 hover:bg-transparent hover:border-red-600 font-semibold bg-red-600 text-white'>Delete</button>
                <button id={item.id} onClick={handleMoreBtnClick} className='p-2 rounded-md font-semibold bg-green-600 border-[2px] duration-300 hover:text-green-600 hover:bg-transparent hover:border-green-600 text-white'>More</button>
            </div>
        </li>
        </>
    )
}

export default TodoItem
