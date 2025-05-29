
const Notes = ({ color, task, date, id, handleDelete }) => {
   
    return (
        <div
            style={{ backgroundColor: color }}
            className=' w-full h-60 rounded-2xl text-white p-2 pl-4 pr-4 '>
            <div className="flex text-end justify-end pb-2 cursor-pointer" onClick={() => { handleDelete(id) }}>
                ❌
            </div>
            <div className="relative w-full h-5/6">

                <div className="bg-amber-100/40   rounded-2xl h-5/6 text-black  p-4 ">
                    <div className="absolute left-0 bottom-42 text-4xl  text-white"> 📝</div>
                    <p className="text-white p-2"> {task}</p>
                    <div className="absolute bottom-0 left-10      ...">
                        <p className="text-white text-sm">Fecha: {date}</p>
                    </div>
                </div>

            </div>

        </div>




    )
}

export default Notes