import IconOso from "../../public/images/OSO.webp";
import Card from "../components/Cardviewproduct";
import Footer from "../components/Footer";
/**
 * ! This page integrates the card component
 * ? Option likes pending for integrate
 */

export default function ViewProducts() {
    return (
        <>
            {/* container page viewProducts */}
            <article className="m-10">
                {/*container subtitle */}
                <section className="flex border-b-2 border-green-600">
                    {/* icon */}
                    <div>
                        <img className="w-10 desktop:w-24" src={IconOso} alt="Icono de oso" />
                    </div>
                    {/* subtitle */}
                    <div className="flex items-end text-xl tablet:text-5xl font-semibold tracking-{3%} text-green-600">
                        <h2>Coches y paseadores</h2>
                    </div>
                </section>
                {/*End container subtitle */}

                {/* Container component card */}
                <section className="m-7 flex justify-center flex-wrap">
                    <Card />
                </section>
                {/*End Container componet card */}
            </article>
            {/*End container page viewProducts */}
            {/* Componet footer */}
            <Footer />
            {/*End Componet footer */}
        </>

    )
}
