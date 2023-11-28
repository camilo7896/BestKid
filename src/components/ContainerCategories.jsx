import ropa from '../../public/images/cochebebé.png'

const ContainerCategories = () => {

    return (
        <>
            <div className='flex flex-wrap justify-center' style={{ fontFamily: 'fontTitleBold', color: '#fff9f6', fontSize: 18 }}>
                <div className='m-5 p-5 w-28 h-28 flex justify-center text-center items-center' style={{ background: '#ffc9a8', backgroundImage: `url(${ropa})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    Ropa
                </div> 
                <div className='m-5 p-5 w-28 h-28 flex justify-center text-center items-center' style={{ background: '#ffc9a8', backgroundImage: `url(${ropa})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    Ropa
                </div> 
                <div className='m-5 p-5 w-28 h-28 flex justify-center text-center items-center' style={{ background: '#ffc9a8', backgroundImage: `url(${ropa})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    Ropa
                </div>     
                  <div className='m-5 p-5 w-28 h-28 flex justify-center text-center items-center' style={{ background: '#ffc9a8', backgroundImage: `url(${ropa})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    Ropa
                </div>            
            </div>
        </>
    )
}

export default ContainerCategories
