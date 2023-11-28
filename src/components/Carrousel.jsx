import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,         // Hace que el carrusel se desplace automáticamente
        autoplaySpeed: 2000,    // Ajusta la velocidad del desplazamiento automático en milisegundos
    };

    return (
        <>
            <div className="max-w-md mx-auto">
                <Slider {...settings}>
                    {/* Slide 1 */}
                    <div className="p-5">
                        <div className="bg-gray-300 h-64 flex items-center justify-center">
                            <p className="text-2xl font-bold">Slide 1</p>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="p-5">
                        <div className="bg-gray-400 h-64 flex items-center justify-center">
                            <p className="text-2xl font-bold">Slide 2</p>
                        </div>
                    </div>
                    {/* Agrega más slides según sea necesario */}
                </Slider>
            </div>
        </>
    );
}

export default Carrousel;

