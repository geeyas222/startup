import styles from "../style";
import { Helmet } from "react-helmet";
import { logo } from "../assets";

const Aboutus = () => {
    return (
        <>
            <Helmet>
                <title>Soft Hat Solution</title>
                <meta name="description" content="It Solutions, Web designing, web development, app development, Application development." />
                {/* Add more meta tags as needed for SEO */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="IT, Technology, AI, Solutions, Web, Design, Development, App, Application, Near, me, Software, Online, Marketing, Website" />
                <meta name="author" content="Your Name" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <section id='about' className="py-12 bg-black-gradient-2 rounded-[20px]" >
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 p-6" data-aos='fade-right'>
                            <h2 className={styles.heading2}>About Us</h2>
                            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
                                At <a href="#home" className="text-blue-300"> SoftHat Solution</a>, we're on a mission to revolutionize the way you experience technology. Our team of passionate individuals is dedicated to creating innovative solutions that empower individuals and businesses to achieve more. With a focus on cutting-edge technologies and user-centric design, we're constantly pushing the boundaries of what's possible.
                            </p>
                        </div>
                        <div className="md:w-1/2 p-6">
                            <img
                                src={logo}
                                alt="Team"
                                // className="rounded-t-3xl border-4 border-slate-900 shadow-2xl "
                                data-aos='fade-left'
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutus;