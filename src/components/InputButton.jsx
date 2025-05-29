import Calendar from 'react-calendar';
import { useState } from 'react';



const InputButton = ({ handleTask }) => {
    const [value, onChange] = useState(new Date());
    const [text, setText ] = useState('')
    handleTask(value, text)
    return (
        <div className='shadow  justify-center items-center  border border-gray-200 rounded-md  m-2 p-2'>

            <label className='flex flex-row w-3/5 ' >Escribe tu nota

            </label>
            <div className='flex items-center gap-4 '>
                <textarea
                    rows={7}
                    maxLength={300}
                    name='note'
                    onChange={(e) => { setText(e.target.value) }}
                    type='text' placeholder='Nueva nota' className='w-full  m-2 border  border-gray-300  font-normal flex text-black rounded-md enabled:hover:border-gray-400 p-2' />
                <div className='border rounded-md border-gray-400 p-2'>
                    <Calendar onChange={onChange} value={value} />
                </div>
                <button className='bg-green-500 text-white p-2 rounded-md w-1/5 hover:bg-green-300 cursor-pointer'>
                    Enviar
                </button>
            </div>
        </div>
    )
}

export default InputButton