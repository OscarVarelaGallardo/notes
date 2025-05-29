import Calendar from 'react-calendar';
import { useState } from 'react';
import { toast } from 'sonner';


const InputButton = ({ colorUser }) => {
    const [value, onChange] = useState(new Date());
    const [text, setText] = useState('');

    const handleTask = () => {
        console.log(text.length <= 0)
        if(text.length <= 0){
            toast.error('Debes ingresar el texto en la nota ')
            return
        }
        toast.info('Enviado tarea')
        const data = {
            task: text,
            date: value,
            color: colorUser

        }
        console.log(data)
       

    }
    return (
        <div className='shadow-sm  justify-center items-center  border border-gray-200 rounded-md  m-2 p-2'>

            <label className='flex flex-row w-3/5 uppercase text-blue-700 font-bold ' >Escribe tu nota

            </label>
            <div className='flex items-center gap-4 '>
                <textarea
                    rows={7}
                    maxLength={300}
                    name='note'
                    onChange={(e) => { setText(e.target.value) }}
                    type='text' placeholder='Nueva nota' className='w-full   p-2 m-2     font-normal flex text-black rounded-md enabled:hover:border-gray-400 border border-gray-200' />
                <div className=' rounded-md p-1 '>
                    <Calendar onChange={onChange} value={value}  className='p-2'/>
                </div>
                <button
                    onClick={() => handleTask()}
                    className='bg-green-500 text-white p-2 rounded-md w-1/5 hover:bg-green-300 cursor-pointer'>
                    Enviar
                </button>
            </div>
        </div>
    )
}

export default InputButton