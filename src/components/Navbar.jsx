import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {
    return (
        <>
            <section className="flex justify-between items-center container">
                <div className="flex items-center">
                    <div className="mx-3">
                        <img className="w-14" src="../../public/images/LOGO_COMPLETO.webp" alt="Best Markid"/>
                    </div>
                    <h2 className="font-fontTitleBold text-[13px] sm:text-lg tracking-wide text-green-600"> best mar<span className="text-orange-500">kid</span></h2>
                </div>

                <div className="m-3 text-center">
                <small className='text-green-600'>Siguenos</small>
                    <ul className='flex'>
                    <li className='m-1'><FacebookIcon style={{ color: '#00b288', fontSize: 18 }}/></li>
                    <li className='m-1'><InstagramIcon style={{ color: '#00b288',fontSize: 18 }}/></li>
                    <li className='m-1'><LinkedInIcon style={{ color: '#00b288',fontSize: 18 }}/></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Navbar
