import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ContainerCategories from "../components/ContainerCategories";
import Carrousel from "../components/Carrousel";


const Home = () => {
  return (
    <>
      <section className="bg-green-100">
        <Navbar />
      </section>
      <section>
   <Carrousel/>
      </section>
      <section>
        <div className="mx-14 text-center">
          <h2 className="h2 text-orange-800 pb-3.5 sm:">Categorías</h2>
          <div className="p2 leading-4 text-orange-500">Te invitamos a descubrir la amplia variedad de productos que puedes encontrar en<span className="font-fontTitleBold text-[13px] sm:text-lg tracking-wide text-green-600"> best mar<span className="text-orange-500">kid</span></span>.</div>
        </div>
        <div className="mx-10 pt-8 pb-16 flex flex-col gap-3.5">
          <ContainerCategories/>
        </div>
      </section>
      <section className="bg-[url('../public/images/BANNER_ONE.webp')] bg-cover bg-no-repeat bg-center">
        <h1 className="mx-10 pt-16 pb-3.5 h1 text-green-900">¿QUÉ ESPERAS PARA UNIRTE A<span className="font-fontTitleBold text-[22px] sm:text-lg tracking-wide lowercase"> best markid</span>?</h1>
        <h4 className="mx-10 pb-8 h4 text-whiteGreen-50">Encuentra docenas de opciones para <b>comprar</b> artículos infantiles de segunda mano. Y eso no es todo, también puedes <b>vender</b> los artículos que ya no utilizas. ¡No pierdas la oportunidad de ser parte de nuestra comunidad!</h4>
        <div className="m-auto pb-16 flex justify-center">
          <button className="green-button h2">¡Regístrate!</button>
        </div>
      </section>
      <section className="py-16 text-center">
        <h2 className="mx-14 h2 text-orange-500">¿Quiénes somos?</h2>
        <img src="../public/images/OSO.webp" className="m-auto py-8"></img>
        <div className="mx-10 p2 leading-4 text-orange-800"><span className="font-fontTitleBold text-[13px] sm:text-lg tracking-wide text-green-600"> best mar<span className="text-orange-500">kid </span></span>es un emprendimiento con liderazgo femenino que nace de una necesidad identificada a través de nuestra experiencia en el mercado de productos infantiles. Nos apasiona brindar soluciones a las familias ofreciendo una alternativa sostenible y accesible para adquirir artículos infantiles de calidad.</div>
      </section>
      <section className="text-center">
        <h2 className="mx-14 h2 text-green-600">Lo más vendido</h2>
        <h1 className="h1">Luego la hago</h1>
      </section>
      <Footer />
    </>
  )
}

export default Home
