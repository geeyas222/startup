import styles from "../style";
import { Helmet } from "react-helmet";
import { discount, home } from "../assets";
import { Typewriter } from 'react-simple-typewriter'
import { services } from "../constants";

const Hero = () => {
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
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-16`} data-aos='fade-right'>
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" loading="lazy" />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">20%</span> Discount For{" "}
              <span className="text-white">New</span> Customer
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[48px] text-white ss:leading-[100.8px] leading-[75px]">
              Empowering<br className="sm:block hidden" />{" "} Your Tomorrow,<br className="sm:block hidden" />{" "}Today with<br className="sm:block hidden" />{" "}
              <span className="text-gradient">SoftHat</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
            </div>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Solution
          </h1>
          <h1 className="text-gradient font-poppins font-semibold ss:text-[48px] text-[40px] text-white ss:leading-[100.8px] leading-[75px] w-full h-[150px]">
            <Typewriter
              words={services.map(service => service.title)}
              loop={999}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
            <span className="text-blue-[300]"> "Elevate Your Online Business with <a href="#home" className="text-blue-300"> SoftHat Solution</a> Designing Solutions, Delivering Success. Your Vision, Our Expertise, Success Achieved. Transforming Challenges into Digital Triumphs. Your Success, Our Commitment."</span>
          </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} data-aos='fade-left'>
          <img src={home} alt="billing" className="w-[100%] h-[100%] relative z-[5]" loading="lazy" />
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>

        </div>
      </section >
    </>
  );
};

export default Hero;