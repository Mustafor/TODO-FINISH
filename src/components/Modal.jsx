import React from 'react'

const Modal = ({children, openModal, setOpenModal,}) => {
  return (
    <div onClick={(e) => e.target.id == "wrapper" ? setOpenModal(false) : setOpenModal(true)} id='wrapper' className={`fixed ${openModal ? "scale-100" : "scale-0"} inset-0 duration-300 backdrop-blur bg-[#0000049]`}>
        <div className='w-[500px] absolute mx-auto right-0 mt-10 left-0 bg-white p-5 rounded-md'>
            {children}
        </div>
    </div>
  )
}

export default Modal