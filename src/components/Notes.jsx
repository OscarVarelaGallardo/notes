
const Notes = ({ color }) => {
    return (

        <div
            style={{ backgroundColor: color }}
            className=' w-full h-60 rounded-2xl text-white p-2 pl-4 pr-4 '>
            <div className="flex text-end justify-end pb-2">
                <p>❌</p>
            </div>
            <div className="relative w-full h-5/6">
               
                <div className="bg-amber-100/40   rounded-2xl h-5/6 text-black  p-4 ">
                    <div className="absolute left-0 bottom-42 text-4xl "> 📝</div>
                    <p>Texto parent</p>
                <div className="absolute bottom-0 left-32     ...">
                    <p className="text-white text-sm">Fecha: 26/05/2025</p>
                </div>
            </div>

            </div>

        </div>




    )
}

export default Notes