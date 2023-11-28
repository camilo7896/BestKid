import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {
    return (
        <>
            <section className="flex justify-between items-center container">
                <div className="flex items-center">
                    <div className="m-2">
                        <img className="w-10" src="../../public/images/LOGO_COMPLETO.webp" alt="Best Markid"/>
                    </div>
                    <span className="font-fontTitleBold text-[13px] sm:text-lg tracking-wide text-green-600"> best mar<span className="text-orange-500">kid</span></span>
                </div>

                <div className="m-3 text-center">
                <small className='text-green-900'>Siguenos</small>
                    <ul className='flex'>
                    <li className='m-1'><FacebookIcon style={{ color: '#045042' }}/></li>
                    <li className='m-1'><InstagramIcon style={{ color: '#045042' }}/></li>
                    <li className='m-1'><LinkedInIcon style={{ color: '#045042' }}/></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Navbar
