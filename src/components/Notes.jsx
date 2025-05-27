
const Notes = ({ color }) => {
    return (

        <div
            style={{ backgroundColor: color }}
            className=' w-full h-60 rounded-2xl text-white p-2 pl-4 pr-4 '>
            <div className="flex text-end justify-end pb-2">
                <p>❌</p>
            </div>
            <div class="relative w-full h-5/6">
                <div className="bg-amber-100/40   rounded-2xl h-3/4 text-black  p-4 ">
                <p>Texto parent</p>
                <div class="absolute bottom-0 left-2  ...">
                    <p className="text-white text-end">Fecha child</p>
                </div>
            </div>
            </div>

        </div>




    )
}

export default Notes