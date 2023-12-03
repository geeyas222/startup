import React, { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion"

import { services } from "../constants/index";

const Services = ({
    title,
    value
}) => {

    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="sm:ml-20">
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                ref={tiltRef}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <motion.h1>{title}</motion.h1>
                </div>

                <div className='mt-5'>
                    <motion.h3
                        whileTap={{ scale: 0.8, color: 'grey' }}
                        className='text-white font-bold text-[24px] cursor-pointer'
                    >
                        {value}
                    </motion.h3>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Service = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNextClick = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % services.length);
    };

    const handlePrevClick = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    };

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
        // Toggle body scroll
        document.body.style.overflow = isModalOpen ? 'auto' : 'hidden';
    };

    return (
        <>
            <div className="flex justify-between mt-4">
                <button onClick={handlePrevClick} className="text-6xl text-white">
                    <span role="img" aria-label="Previous" className="cursor-pointer" onClick={handlePrevClick}>
                        👈
                    </span>
                </button>

                <div>
                    {services.map((service, index) => (
                        <div
                            key={`service-${index}`}
                            className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 ${index === currentCardIndex ? '' : 'hidden'}`}
                        >
                            <Services {...service} />
                        </div>
                    ))}
                </div>

                <button onClick={handleNextClick} className="text-6xl text-white">
                    <span role="img" aria-label="Next" className="cursor-pointer" onClick={handleNextClick}>
                        👉
                    </span>
                </button>
            </div>
        </>

    );
};

export default Service;
