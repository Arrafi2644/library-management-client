import React from 'react';
import { Button } from '../../button';

const Banner = () => {
    return (
        <div>
            <div style={{
                backgroundImage: "url('https://i.ibb.co/s9fYF0t0/pexels-olly-3761515.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }} className='text-center space-y-4 min-h-[400px] md:min-h-[450px] flex flex-col items-center justify-center'>
                    <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-green-500 '>Effortless Library Management Starts Here</h2>
                    <Button className='bg-green-500'>Explore all books</Button>
            </div>
        </div>
    );
};

export default Banner;