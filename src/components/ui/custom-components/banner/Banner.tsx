import React from 'react';
import { Button } from '../../button'; // adjust based on your project

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: "url('https://i.ibb.co/s9fYF0t0/pexels-olly-3761515.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="relative min-h-[400px] flex items-center justify-center"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 space-y-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    Unlock a World of Knowledge
                </h1>
                <p className="text-lg md:text-xl max-w-xl mx-auto">
                    Discover, manage, and borrow books seamlessly through our modern library platform.
                </p>
                <Button className="bg-green-500 text-white hover:bg-green-600 transition">
                    Get Started
                </Button>
            </div>
        </div>
    );
};

export default Banner;
