import React, { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion"

import { services } from "../constants/index";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Services = ({
    id,
    title,
    value
}) => {

    return (
        <motion.div variants={fadeIn("up", "spring", id * 0.5, 0.75)} className="sm:ml-20">
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}

                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className="card">
                    <div className="card-body">
                        <div className='relative w-full text-white font-bold'>
                            <motion.h1>{title}</motion.h1>
                        </div>
                        <div className='mt-5'>
                            <motion.p
                                whileTap={{ scale: 0.8, color: 'grey' }}
                                className='text-white text-[15px] cursor-pointer text-justify'
                            >
                                {value}
                            </motion.p>
                        </div>
                    </div>
                </div>
                {/* <div className='relative w-full h-[230px]'>
                    <motion.h1>{title}</motion.h1>
                </div>

                <div className='mt-5'>
                    <motion.h3
                        whileTap={{ scale: 0.8, color: 'grey' }}
                        className='text-white font-bold text-[24px] cursor-pointer'
                    >
                        {value}
                    </motion.h3>
                </div> */}
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
                        <FaAngleLeft />
                    </span>
                </button>

                <div className="mr-10 md:mr-24 lg:mr-24">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 ${index === currentCardIndex ? '' : 'hidden'}`}
                        >
                            <Services {...service} />
                        </div>
                    ))}
                </div>

                <button onClick={handleNextClick} className="text-6xl text-white">
                    <span role="img" aria-label="Next" className="cursor-pointer" onClick={handleNextClick}>
                        <FaAngleRight />
                    </span>
                </button>
            </div>
        </>

    );
};

export default Service;
