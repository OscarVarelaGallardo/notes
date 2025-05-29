

const ButtonColor = ({ color, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className="h-10 w-10  text-white flex rounded-full text-2xl cursor-pointer"
        >

        </button>
    );
};

export default ButtonColor;