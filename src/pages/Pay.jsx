import Footer from "../components/Footer";
import PseIcon from "../../public/images/pse.png"

export default function Pay() {
    return (
        <>
            <section className="m-10">
                <header>
                    <h2 className="text-xl font-semibold tracking-{3%} text-green-600">¡Es momento de realizar tu pago!</h2>
                </header>
                <div className="border-2 w-auto shadow-gray-700 shadow-sm rounded-xl p-2 m-4">
                    <div className="">
                        <h2 className=" mb-4 text-center text-xl font-semibold tracking-{3%} text-green-600">Datos de tu envio</h2>
                    </div>
                    <div className="text-green-600 text-start">
                        <p><strong className="text-center text-xl font-semibold tracking-{3%}">Nombres:</strong>: Juan Perez C.</p>
                        <p><strong className="text-center text-xl font-semibold tracking-{3%}">Dirección:</strong>: Calle 7 # 14B - 85 Mosquera, Cund.</p>
                        <p><strong className="text-center text-xl font-semibold tracking-{3%}">Telefono:</strong>: +57 1234569</p>
                        <p><strong className="text-center text-xl font-semibold tracking-{3%}">Detalles:</strong>: Barrio Centro Apt. 105 Torre 3 </p>
                        <div className="flex justify-center m-4">
                            <button type="submit" className="w-auto h-6 flex justify-center items-center bg-green-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline">
                                Editar datos de envio
                            </button>
                        </div>
                    </div>
                </div>

                <section>
                    <div>
                        <h2 className="text-xl font-semibold tracking-{3%} text-green-600">Realizar pago</h2>
                    </div>
                    <div>
                        <img src={PseIcon} alt="icon pse"/>
                    </div>
                    <div className="text-white bg-green-600 p-2 rounded-3xl">
                        <small>¡Asegurate que los datos de envio esten bien, es la unica forma que tenemos para garantizar que tu compra este segura ! </small>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    )
}
