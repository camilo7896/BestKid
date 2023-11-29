import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider1 from '../../public/slider/ropaBebe.jpg'
import Slider2 from '../../public/slider/vestidoRosa.jpg'
import Slider3 from '../../public/slider/vistaFrontal.jpg'

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
            <div className="max-w-max mx-auto mb-5">
                <Slider {...settings}>

                    {/* Slide 1 */}
                    <div className="pt-2">
                        <div className="h-64 flex items-center justify-start" style={{ backgroundImage: `url(${Slider1})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <div className='container ml-8'>
                                <div className='bg-green-600 opacity-70 p-3 rounded-2xl text-whiteGreen-50 font-fontTitleRegular w-52 text-center'>
                                    <p>Reutiliza la magia de la infancia</p>
                                </div>
                                <div className='ml-4 m-3 flex  items-center'>
                                    {/* <Button style={{background:"#d0fbe8", borderRadius:"10px", color:"#045042", margin:"2px", padding:"5px", fontWeight:"bold"}}>¡Registrate!</Button> */}
                                    <button className="bg-green-200 text-green-900 px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300">
                                        ¡Registrate!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="pt-2">
                        <div className="h-64 flex items-center justify-start" style={{ backgroundImage: `url(${Slider2})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <div className='container ml-8'>
                                <div className='bg-green-600 opacity-70 p-3 rounded-2xl text-whiteGreen-50 font-fontTitleRegular w-52 text-center'>
                                    <p>Reutiliza la magia de la infancia</p>
                                </div>
                                <div className='ml-4 m-3 flex  items-center'>
                                    {/* <Button style={{background:"#d0fbe8", borderRadius:"10px", color:"#045042", margin:"2px", padding:"5px", fontWeight:"bold"}}>¡Registrate!</Button> */}
                                    <button className="bg-green-200 text-green-900 px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300">
                                        ¡Registrate!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Slide 3 */}
                    <div className="pt-2">
                        <div className="h-64 flex items-center justify-start" style={{ backgroundImage: `url(${Slider3})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <div className='container ml-8'>
                                <div className='bg-green-600 opacity-70 p-3 rounded-2xl text-whiteGreen-50 font-fontTitleRegular w-52 text-center'>
                                    <p>Reutiliza la magia de la infancia</p>
                                </div>
                                <div className='ml-4 m-3 flex  items-center'>
                                    {/* <Button style={{background:"#d0fbe8", borderRadius:"10px", color:"#045042", margin:"2px", padding:"5px", fontWeight:"bold"}}>¡Registrate!</Button> */}
                                    <button className="bg-green-200 text-green-900 px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300">
                                        ¡Registrate!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default Carrousel;

