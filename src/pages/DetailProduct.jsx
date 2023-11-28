import Coche from "../../public/images/cochebebé.png";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
export default function DetailProduct() {
    return (
        <>
            <section className="m-10 flex flex-wrap items-center justify-center mt-5">
                {/* Container">
                {/* Container card */}
                <div className=" shadow-zinc-400  p-2 justify-center items-center border-2 border-gray-300 rounded-lg flex flex-row">
                    {/* Container img */}
                    <div className=" m-5 w-auto">
                        <img className="w-auto" src={Coche} alt="coche" />
                    </div>
                    {/*End container img */}
                    {/* Container subCard */}
                    <div className="flex flex-wrap justify-center items-center">
                        <div className="m-1 w-auto border-2 border-gray-300 mb-1 rounded-lg">
                            <img className="w-20" src={Coche} alt="coche" />
                        </div>
                        <div className="m-1 w-20 border-2 border-gray-300 mb-1 rounded-lg">
                            <img className="w-auto" src={Coche} alt="coche" />
                        </div>
                        <div className="m-1 w-20 border-2 border-gray-300 mb-1 rounded-lg">
                            <img className="w-auto" src={Coche} alt="coche" />
                        </div>
                    </div>
                    {/* End container subCard */}
                </div>
                {/* End container card */}
            </section>
            {/* Description the product */}
            <section className="m-10 ">
                <div className="flex flex-row">
                    {/* Info title and detail */}
                    <div className="m-2">
                        <h2 className="text-xl font-semibold tracking-{3%} text-green-900">Coche para bebé</h2>
                        <h4 className="text-orange-800">Detalles:</h4>
                        <p className="text-orange-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis
                        </p>
                    </div>
                    {/* Info price */}
                    <div className="m-1">
                        <h3 className="text-xl font-semibold tracking-{3%} text-orange-800 pb-4">$150.000</h3>
                        <h4 className="text-orange-500">Tallas: 0</h4>
                        <h4 className="text-orange-500">Medidas: 1 x 60</h4>
                    </div>
                </div>
                {/* Butons */}
                <div className="flex justify-center flex-wrap">
                    <button className="w-40 h-10 text-center m-2 rounded-full bg-green-700 p-2 text-gray-50">Hacer oferta</button>
                    <button className="w-40 h-10 text-center m-2 rounded-full bg-orange-700 p-2 text-gray-50">Agregar a carrito</button>
                </div>
            </section>
            {/* End description the product */}
            <div className="m-10 border-2 border-green-900 "></div>
            {/* section comments */}
            <section className="m-10">
                <h2 className="text-xl font-semibold tracking-{3%} text-orange-600">Opiniones</h2>
                {/* input the comment */}
                <div className="flex flex-col">
                    <label htmlFor="comment" className="text-sm font-medium mb-1">Comentario:</label>
                    <textarea
                        id="comment"
                        name="comment"
                        className="border border-green-600 p-2 rounded-md resize-none focus:outline-none focus:ring focus:border-blue-500"
                        rows={4}
                        placeholder="Escribe tu comentario aquí"
                    />
                </div>
                <div className="flex justify-end m-4">
                    <button type="submit" className="w-32 h-6 flex justify-center items-center bg-orange-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline">
                        Enviar
                    </button>
                </div>
                {/*End input the comment */}
               
                <div className="container">

                    <div className="mt-2 p-3 rounded-2xl ">
                        {/* Container avatar */}
                        <div className="flex flex-row items-end">
                            <Avatar />
                            <h2 className="pl-2 text-xl font-semibold tracking-{3%} text-green-900">Maria</h2>
                        </div>
                        {/* Container commnent */}
                        <div className="m-3 border-2 border-gray-300 shadow-gray-700 shadow-sm rounded-xl p-2">
                            <p className="text-orange-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 p-3 rounded-2xl ">
                        {/* Container avatar */}
                        <div className="flex flex-row-reverse items-end p-3">
                            <Avatar />
                            <h2 className="pl-2 text-xl font-semibold tracking-{3%} text-green-900">Paula</h2>
                        </div>
                        {/* Container commnent */}
                        <div className="m-3 border-2 border-gray-300 shadow-gray-700 shadow-sm rounded-xl p-2">
                            <p className="text-orange-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis
                            </p>
                        </div>
                    </div>

                    <div className="mt-2 p-3 rounded-2xl ">
                        {/* Container avatar */}
                        <div className="flex flex-row items-end">
                            <Avatar />
                            <h2 className="pl-2 text-xl font-semibold tracking-{3%} text-green-900">Maria</h2>
                        </div>
                        {/* Container commnent */}
                        <div className="m-3 border-2 border-gray-300 shadow-gray-700 shadow-sm rounded-xl p-2">
                            <p className="text-orange-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis
                            </p>
                        </div>
                    </div>
                </div>
                 {/* Container comments */}
            </section>
            <Footer/>
            {/*End section comments */}


        </>
    )
}
