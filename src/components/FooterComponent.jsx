import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterComponent = () => {
    return (
        <footer>
            <section className="py-8 bg-green-900 flex flex-wrap justify-center">
                {/* Box 1 */}
                <div className="w-48 flex justyfi-center m-5">
                    <img className="w-40" src="../../public/images/LOGO_CLARO(con_eslogan).png" alt="Best Markid" />
                </div>
                <div className="flex justify-center space-x-20">
                    <div className="flex flex-wrap justify-center">
                        {/* Box 2 */}
                        <div className="w-48 text-center text-white m-2">
                            <strong className="text-green-200">Contactenos</strong>
                            <hr className="m-5" />
                            <ul>
                               <li className="m-2">Bogota Colombia</li>
                               <li className="m-2">+57 300 11 2222</li>
                               <li className="m-2"><FacebookIcon/> <InstagramIcon/> <LinkedInIcon/></li>
                               <li className="m-2"></li>
                               <li className="m-2"></li>
                            </ul>
                        </div>
                        {/* Box 3 */}
                        <div className="w-48 text-center text-white m-2">
                            <strong className="text-green-200">Soporte</strong>
                            <hr className="m-5" />
                            <ul>
                               <li className="m-2">Preguntas frecuentes.</li>
                               <li className="m-2">chatea con nosotros.</li>
                               <li className="m-2">pqr@bestmarkid.com.co</li>
                            </ul>
                           
                        </div>
                        {/* Box 4 */}
                        <div className="w-48 text-center text-white m-2">
                            <strong className="text-green-200">Best Markid</strong>
                            <hr className="m-5" />
                            <ul>
                               <li className="m-2">¿Quienes somos?</li>
                               <li className="m-2">Terminos y condiciones.</li>
                               <li className="m-2">Politica de tratamiento de datos personales.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </section>
            <div className="text-center item-center bg-green-600 text-white p-2">
            <small>Desarrollado con &#x2764; por House the Latam &copy; 2023</small>

                </div>
        </footer>
    )
}

export default FooterComponent