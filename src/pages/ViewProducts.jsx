import IconOso from "../../public/images/OSO.webp";
import Card from "../components/Cardviewproduct";
import Footer from "../components/Footer";


export default function ViewProducts() {
    return (
        <>
            <article className="m-10">
                <section className="flex border-b-2 border-green-600">
                    <div>
                        <img className="w-10" src={IconOso} alt="Icono de oso" />
                    </div>
                    <div className="text-xl font-semibold tracking-{3%} text-green-600">
                        <h2>Coches y paseadores</h2>
                    </div>
                </section>

                {/* card */}
                <section className="m-7 flex justify-center flex-col">
                    <Card/>        
                </section>

               
            </article>
            <Footer/>
        </>

    )
}
