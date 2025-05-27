import React from 'react'

const InputButton = () => {
    return (
        <div className='shadow  justify-center items-center  border border-gray-200 rounded-md  m-2 p-2'>
            <div className='flex items-center gap-4'>
                <label className='flex flex-col w-3/5 ' >Escribe tu nota
                    <textarea
                        name='note'
                        type='text' placeholder='Nueva nota' className='w-full  m-2 border  border-gray-300  font-normal flex text-black rounded-md enabled:hover:border-gray-400 p-2' />
                </label>
                <input type='date' className='w-1/5 border border-amber-400 rounded-md h-10'></input>
                <button className='bg-green-500 text-white p-2 rounded-md w-1/5 hover:bg-green-300 cursor-pointer'>
                    Enviar
                </button>
            </div>
        </div>
    )
}

export default InputButton