import Coche from "../../public/images/cochebebé.png";
export default function DetailProduct() {
    return (
        <>
            <section className="flex flex-wrap items-center justify-center mt-5">
                {/* Container">
                {/* Container card */}
                <div className="p-2 justify-center items-center border-2 border-gray-600 w-2/3 rounded-lg flex flex-wrap">
                    {/* Container img */}
                    <div className=" m-5">
                        <img className="w-52" src={Coche} alt="coche" />
                    </div>
                    {/*End container img */}
                    {/* Container subCard */}
                    <div className="flex flex-wrap justify-center items-center">
                        <div className="m-1 border-2 border-gray-300 mb-1 rounded-lg">
                            <img className="w-16" src={Coche} alt="coche" />
                        </div>
                        <div className="m-1 border-2 border-gray-300 mb-1 rounded-lg">
                            <img className="w-16" src={Coche} alt="coche" />
                        </div>
                        <div className="m-1 border-2 border-gray-300 mb-1 rounded-lg">
                            <img className="w-16" src={Coche} alt="coche" />
                        </div>
                    </div>
                    {/* End container subCard */}
                </div>
                {/* End container card */}
            </section>
            {/* Description the product */}
            <section className="m-10">
                <div className="flex flex-row">
                {/* Info title and detail */}
                    <div className="m-2">
                        <h2>Coche para bebé</h2>
                        <h4>Detalles:</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis
                        </p>
                    </div>
                    {/* Info price */}
                    <div className="m-1">
                        <h3>$150.000</h3>
                        <h4>Tallas: 0</h4>
                        <h4>Medidas: 1 x 60</h4>
                    </div> 
                </div>
                 {/* Butons */}
                 <div className="flex justify-center flex-wrap">
                 <button className="w-40 h-10 text-center m-2 rounded-full bg-green-700 p-2 text-gray-50">Hacer oferta</button>
                    <button className="w-40 h-10 text-center m-2 rounded-full bg-orange-700 p-2 text-gray-50">Agregar a carrito</button>
                    </div>
            </section>
            {/* End description the product */}
        </>
    )
}
