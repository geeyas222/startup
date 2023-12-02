import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import styles from "../style";
import { openLink } from "../assets";
import { fadeIn, textVariant } from "../utils/motion"

import { projects } from "../constants/index";


const Projects = ({
    index,
    name,
    description,
    tags,
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
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
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
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Project = () => {
    return (
        <>
            {/* <motion.div variants={textVariant()} id="projects">
                <p className={`${styles.sectionSubText} `}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div> */}

            <div className='flex'>
                {projects.map((project, index) => (
                    <Projects key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default Project;