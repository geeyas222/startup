import { useState } from "react";
import { webman } from "../assets";
import { Helmet } from "react-helmet";
import styles, { layout } from "../style";
import ModalDialog from "./ModalDialog";
import Project from "./Project";


const Billing = () => {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  const State = [
    <>
     <Project />
    </>
  ]
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
    <section id="projects" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse} data-aos='fade-right'>
        <img src={webman} alt="billing" className="w-[100%] h-[100%] relative z-[5]" loading="lazy"/>

      </div>

      <div className={layout.sectionInfo} data-aos='fade-left'>
        <h2 className={styles.heading2} >
          Crafting Dynamic Digital Experiences: <br className="sm:block hidden" />  Building Responsive Web Applications <br className="sm:block hidden" /> For Your Business
        </h2>
        {/* "Crafting Dynamic Digital Experiences: Building Responsive Web Applications for Your Business." */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
          At <a href="#home" className="text-blue-300">SoftHat Solution</a>, we take pride in our ability to create exceptional online journeys that adapt seamlessly across devices. Our dedicated team blends innovation and precision to design and develop responsive web applications tailored to your unique business needs. Elevate your online presence with our cutting-edge solutions that ensure engaging user experiences and impactful results.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <button onClick={() => setModalIsOpen(true)} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
            <a> Projects </a>
          </button>
        </div>
      </div>
      <ModalDialog
         isOpen={modalIsOpen} closeModal={closeModal} content={State} />
    </section>
  </>
)};

export default Billing;