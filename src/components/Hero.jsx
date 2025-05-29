import fondo from '/img/hero-wallpaper.jpg'; // importa la imagen

const Hero = ({ children }) => {
    return (
        <div
            className="min-h-screen bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${fondo})` }}
        >
            <div className=" min-h-screen w-full flex items-center justify-center">
                {children}
            </div>
        </div>
    );
  };

export default Hero;