import { Box } from '@mui/material';
import Button from '@mui/material/Button';

export default function BtnDownloadComponent() {

    const dataPol = {
        "routePolice": [
            {
                "id": 1,
                "name": "Política de Garantía",
                "route": "../../../public/policies/Política de Garantía de Best Markid.pdf"
            },
            {
                "id": 2,
                "name": "Política de Privacidad",
                "route": "../../../public/policies/Política de Privacidad de Best Markid.pdf"
            },
            {
                "id": 3,
                "name": "Política de Seguridad",
                "route": "../../../public/policies/Política de Seguridad de Best MarkId.pdf"
            },
            {
                "id": 4,
                "name": "Tratamiento de Datos Personales",
                "route": "../../../public/policies/Política de Tratamiento de Datos Personales de Best MarkID.pdf"
            },
            {
                "id": 5,
                "name": "Términos y Condiciones",
                "route": "../../../public/policies/Términos y Condiciones de Best Markid.pdf"
            }
        ]
    }
    const handleDownloadPDF = (pdfURL) => {
        window.open(pdfURL, '_blank');
    };
    return (
        <>
            {dataPol.routePolice.map((item) => {
                return (
                    <div key={item.id} className='m-4'>
                        <Box sx={{boxShadow:3, width:"15rem", height:"15rem", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}} className='text-center p-5'>
                            <div className='w-auto h-32'>
                            <h4 className='h2 m-2 text-green-900' >{item.name}</h4>
                            </div>

                            <Button variant="contained" color="primary" onClick={() => handleDownloadPDF(item.route)}>
                            {item.name}
                            </Button>   
                        </Box>
                    </div>
                )
            })}
        </>
    )
}
