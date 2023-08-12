import styles from "../style";
import {companyName} from "../assets";

const Aboutus = () => {
    return (
        <section id='about' className="py-12 bg-black-gradient-2">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 p-6">
                        <h2 className={styles.heading2}>About Us</h2>
                        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
                            At CoolCo, we're on a mission to revolutionize the way you experience technology. Our team of passionate individuals is dedicated to creating innovative solutions that empower individuals and businesses to achieve more. With a focus on cutting-edge technologies and user-centric design, we're constantly pushing the boundaries of what's possible.
                        </p>
                    </div>
                    <div className="md:w-1/2 p-6">
                        <img
                            src={companyName}
                            alt="Team"
                            className="rounded-lg shadow-2xl shadow-gray-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutus