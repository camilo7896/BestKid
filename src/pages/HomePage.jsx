import FooterComponent from "../components/FooterComponent"
import NavbarComponet from "../components/NavbarComponet"
import CarrouselComponent from "../components/CarrouselComponent";
import CategoriesComponent from "../components/CategoriesComponent";
import AboutUs from "../components/AboutUs";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <>
      <section className="bg-green-100">
        <NavbarComponet />
      </section>
      <section>
      <CarrouselComponent/>
      </section>
      <section>
        <div className="mx-14 text-center">
          <h2 className="h2 text-orange-800 pb-3.5 sm:">Categorías</h2>
          <div className="p2 leading-4 text-orange-500">Te invitamos a descubrir la amplia variedad de productos que puedes encontrar en<span className="font-fontTitleBold text-[13px] sm:text-lg tracking-wide text-green-600"> best mar<span className="text-orange-500">kid</span></span>.</div>
        </div>
        <div className="mx-10 pt-8 pb-16 flex flex-col gap-3.5">
        <CategoriesComponent/>
        </div>
      </section>
      <section className="bg-[url('../public/images/BANNER_ONE.webp')] bg-cover bg-no-repeat bg-center">
        <h2 className="mx-10 pt-16 pb-3.5 h1 text-green-900">¿QUÉ ESPERAS PARA UNIRTE A<span className="font-fontTitleBold text-[22px] sm:text-lg tracking-wide lowercase"> best markid</span>?</h2>
        <h4 className="mx-10 pb-8 h4 text-whiteGreen-50">Encuentra docenas de opciones para <b>comprar</b> artículos infantiles de segunda mano. Y eso no es todo, también puedes <b>vender</b> los artículos que ya no utilizas. ¡No pierdas la oportunidad de ser parte de nuestra comunidad!</h4>
        <div className="m-auto pb-16 flex justify-center">
          <button className="green-button h2">¡Regístrate!</button>
        </div>
      </section>
      <section className="m-10">
        <AboutUs/>
      </section>
      <section className="bg-[url('../public/images/BANNER_ONE.webp')] bg-cover bg-no-repeat bg-center">
        <h2 className="mx-10 pt-16 pb-3.5 h1 text-green-900">Compra transparente y segura</h2>
        <h4 className="mx-10 pb-8 h4 text-whiteGreen-50">En Best MarkID, nos enorgullece ofrecerte una experiencia de compra transparente y segura. Conoce nuestras políticas clave que garantizan tu satisfacción:</h4>
        <div className="m-auto pb-16 flex justify-center">
          <Link to="/policies"><button className="green-button h2">Ver politicas</button></Link>
        </div>
      </section>
      <FooterComponent />
    </>
  )
}

export default HomePage
