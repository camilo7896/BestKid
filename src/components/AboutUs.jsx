import { useState } from 'react';
import Data from '../data/data.json';

const AboutUs = () => {

const [policy, setPolicy] = useState(Data);
  return (
    <>
    <div>
        {policy.bestMarkid.map((item) =>{
            return(
                <div className='border-t border-gray-300' key={item.id}>
                    <h2 className='text-center h2 p-5 text-orange-800'>{item.name}</h2>
                    <div className='flex items-center justify-center'>
                        <img className='w-32' src={item.image} alt={item.name} />
                    </div>
                    <div className='m-5 p2 text-green-900'>
                        <p>{item.description}</p>
                    </div>
                    
                </div>
            )
        })}
    </div>
    </>
  );
};

export default AboutUs;

