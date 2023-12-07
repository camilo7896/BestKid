import NavbarComponet from "../components/NavbarComponet";
import Policie1Component from '../components/policies/Policie1Component'
import FooterComponent from '../components/FooterComponent'



export default function PoliciesPage() {
 
  return (
    <>
      <section>
        <NavbarComponet />
      </section>
      <section className="p-10">
      <h2 className="h2">Transparencia y Confianza: Descarga Nuestros Documentos</h2>
      <br/>
        <p className="p2">¡Bienvenido a nuestra plataforma Best MarkID! Queremos asegurarnos de que tengas toda la información necesaria para tener una experiencia transparente y segura. A continuación, puedes descargar nuestros documentos clave, que incluyen los Términos y Condiciones, la Política de Privacidad y la Política de Garantía. Estos documentos detallan nuestras prácticas, derechos y responsabilidades, y están diseñados para brindarte claridad y confianza mientras navegas y realizas transacciones en nuestra plataforma. Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros. ¡Gracias por ser parte de Best MarkID!</p>
      </section>
      <section>
       <Policie1Component/>
      </section>       
      <FooterComponent/>
    </>
  );
}
