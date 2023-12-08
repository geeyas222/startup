import React, { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { openLink } from "../assets";
import { fadeIn } from "../utils/motion"

import { projects } from "../constants/index";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";


const Projects = ({
    index,
    name,
    image,
    source_code_link,
}) => {
    const tiltRef = useRef(null);

    useEffect(() => {
        const handleOrientation = (event) => {
            if (tiltRef.current) {
                tiltRef.current.tilt.onDeviceMove(event);
            }
        };

        window.addEventListener('deviceorientation', handleOrientation);

        return () => {
            window.removeEventListener('deviceorientation', handleOrientation);
        };
    }, []);

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
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                        loading="lazy"
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='bg-blue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={openLink}
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <motion.h3
                        whileTap={{ scale: 0.8, color: 'grey' }}
                        className='text-white font-bold text-[23px] cursor-pointer'
                    >
                        {name}
                    </motion.h3>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Project = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNextClick = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrevClick = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
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

                <div style={{marginRight:'6rem'}}>
                    {projects.map((project, index) => (
                        <div
                            key={`project-${index}`}
                            className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 ${index === currentCardIndex ? '' : 'hidden'}`}
                        >
                            <Projects {...project} />
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

export default Project;
