import { useState } from "react";
import { IT } from "../assets";
import { Helmet } from "react-helmet";
import styles, { layout } from "../style";
import ModalDialog from "./ModalDialog";
import Service from "./services";
import { services } from "../constants/index";

const CardDeal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(services[0]);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const State = [
    <>
      <Service />
    </>
  ]
  return (
    <>
      <Helmet>
        <title>Soft Hat Solution</title>
        <meta name="description" content="It Solutions, Web designing, web development, app development, Application development." />
        {/* Add more meta tags as needed for SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="IT, Technology, AI, Solutions, Web, Design, Development, App, Application, Near, me, Software, Online, Marketing, Website, IT Solition" />
        <meta name="author" content="Your Name" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className={layout.section} id="">
        <div className={layout.sectionInfo} data-aos='fade-left'>
          <h2 className={styles.heading2}>
            We fix your IT problems <br className="sm:block hidden" /> <span className="text-3xl">Small</span> to <span className="text-7xl">Big</span>
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
            At <a href="#home" className="text-blue-300">SoftHat Solution</a>, we've got you covered with a comprehensive range of IT solutions. Whether you're facing minor PC troubles or complex tasks like software installation, printer setup, data migration, or network configuration, our expert team is here to provide seamless resolutions. No challenge is too big or small for us trust us to be your go-to partner for all your IT needs.
            <br className="sm:block hidden" />
            <a href="#home" className="text-blue-300"> SoftHat Solution </a> is always there for you!
          </p>

        </div>

        <div className={layout.sectionImg} data-aos='fade-right'>
          <img src={IT} alt="IT Services" className="w-[100%] h-[100%]" loading="lazy" />
        </div>
      </section>
    </>
  );
};

export default CardDeal;