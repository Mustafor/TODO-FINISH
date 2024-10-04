import React, { useContext, useState } from 'react';
import TodoItem from './TodoItem';
import Modal from './Modal';
import { Context } from '../Context/TodoContext';

const TodoList = () => {
  const { todos, setTodos } = useContext(Context)
  const [updateModal, setUpdateModal] = useState(false)
  const [updateValue, setUpdateValue] = useState('')
  const [updateId, setUpdateId] = useState(0)

  function hadnleUpdateClick(id) {
    setUpdateModal(true)
    const setUpdateData = todos.find((value) => value.id == id)
    setUpdateValue(setUpdateData.value)
    setUpdateId(id)
  }

  function handleUpdateSubmit(e) {
    e.preventDefault()
    const setUpdateData = todos.find((value) => value.id == updateId)
    setUpdateData.value = updateValue
    setUpdateModal(false)
    setTodos([...todos])
  }

  const [moreModal, setMoreModal] = useState(false)
  const [moreData, setMoreData] = useState({})

  function handleMoreBtnClick(id){
    setMoreModal(true)
    const findedObj = todos.find((item) => item.id == id)
    setMoreData(findedObj)
  }

  return (
    <>
      <ul className="w-[600px] space-y-5 p-5 rounded-md bg-slate-400 mx-auto mt-5">
        {todos.map((item, index) => (<TodoItem handleMoreBtnClick={() => handleMoreBtnClick(item.id)} hadnleUpdateClick={() => hadnleUpdateClick(item.id)} index={index} item={item} key={item.id}/>))}
      </ul>  
      <Modal openModal={updateModal} setOpenModal={setUpdateModal}>
        <form onSubmit={handleUpdateSubmit} className="p-5 rounded-md bg-slate-400 mx-auto mt-5" autoComplete="off">
          <input onChange={(e) => setUpdateValue(e.target.value)} value={updateValue} className="p-2 rounded-tl-md rounded-bl-md w-[80%] outline-none" placeholder="Update your Todo" type="text" required/>
          <button className="w-[20%] bg-green-600 duration-300 hover:opacity-75 text-white font-semibold p-2 rounded-tr-md rounded-br-md">Update</button>
        </form>
      </Modal>
      <Modal openModal={moreModal} setOpenModal={setMoreModal}>
        <h2 className="text-center font-bold text-[30px]">{moreData.value}</h2>
      </Modal>
    </>
  );
};

export default TodoList;
