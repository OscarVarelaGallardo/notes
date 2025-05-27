import ButtonColor from './components/ButtonColor';
import colors from './helpers/colors';
import Notes from './components/Notes';
function App() {
  return (
    <div className="grid grid-cols-5 p-2 ">
      <div className="w-full justify-center items-center flex flex-col min-h-screen gap-4">
        <div
          onClick={() => { console.log('Agregando colores') }}
          className="h-[60px] w-[60px] bg-black text-white flex items-center justify-center rounded-full text-2xl cursor-pointer"
        >
          +
        </div>
        {colors.map((element, index) => (
          <ButtonColor key={index} color={element.color} />
        ))}
              
      </div>
  
      <div className="col-span-4  border-l-gray-300 border-l  pl-5">
  
        <h1 className='text-start text-black mb-16 mt-4 text-4xl font-bold'>Notas</h1>
        <div className=' grid grid-cols-4 w-full gap-4  p-2'>
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