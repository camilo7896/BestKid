import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from '../../public/images/LOGO_COMPLETO.webp'

const NavbarComponet = () => {
    return (
        <>
            <nav className="bg-green-200">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img style={{ maxWidth: '50px', minWidth: '50px' }} src={Logo} alt="Best Markid" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="#" className="text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page"><span className="font-fontTitleBold text-[13px] sm:text-lg tracking-wide text-green-600"> best mar<span className="text-orange-500">kid</span></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <strong style={{ color: '#00b288' }}>Siguenos</strong>
                            <div className="flex relative ml-3">
                                <div className='m-2' style={{ color: '#00b288' }}>
                                    <a href='#'>
                                        <FacebookIcon />
                                    </a>
                                </div>
                                <div className='m-2' style={{ color: '#00b288' }}>
                                    <a href='#'>
                                        <InstagramIcon />
                                    </a>
                                </div>
                                <div className='m-2' style={{ color: '#00b288' }}>
                                    <a href='#'>
                                        <LinkedInIcon />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavbarComponet
