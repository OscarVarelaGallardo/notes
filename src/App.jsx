import ButtonColor from './components/ButtonColor';
import colors from './helpers/colors';
import Notes from './components/Notes';
import InputButton from './components/InputButton';
import { useState } from 'react';

function App() {
  const [colorUser, setColorUser] = useState('gray')
  const handleColors = (color) => {
    setColorUser(color)
  }
 

  return (
    <div className="grid grid-cols-8 p-6 ">
      <div className="w-full justify-center items-center flex flex-col min-h-screen gap-4">
        <div
          style={{ backgroundColor: colorUser, border: '1px dotted white', }}
          onClick={() => { console.log('Agregando colores') }}
          className="h-[60px] w-[60px]  text-white flex items-center justify-center rounded-full text-5xl cursor-pointer col-span-1"
        >
          +
        </div>

        {colors.map((element, index) => (
          <ButtonColor
            key={index}
            color={element.color}
            onClick={() => handleColors(element.color)}
          />))}

      </div>

      <div className="col-span-7  border-l-gray-300 border-l  pl-5">
        <h1 className='text-start  text-black mb-8 pt-8 text-4xl font-bold'>Notas</h1>
        <InputButton colorUser={colorUser}/>
        <div className=' grid grid-cols-4 w-full gap-4  p-1'>
          {colors.map((element, index) => (
            <Notes key={index} color={element.color} >
            </Notes>
          ))
          }

        </div>
      </div>
    </div>
  );
}

export default App