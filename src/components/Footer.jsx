import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import IdeaDrop from './dropidea';
import styles from '../style';
import ModalDialog from "./ModalDialog";

const Footer = () => {
  const [showIdeaDrop, setShowIdeaDrop] = useState(false);

  const handleDropIdeaClick = () => {
    // Set the state to show the IdeaDrop modal when clicked
    setShowIdeaDrop(true);
  };

  const handleCloseModal = () => {
    // Set the state to hide the IdeaDrop modal when the close button is clicked
    setShowIdeaDrop(false);
  };

  return (
    <>
      <Helmet>
        <title>Soft Hat Solution</title>
        {/* Other meta tags */}
      </Helmet>

      <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        {/* Rest of your code */}
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                  >
                    {link.link === '#ideaDrop' ? (
                      <a href={link.link} onClick={handleDropIdeaClick}>
                        {link.name}
                      </a>
                    ) : (
                      <a href={link.link}>{link.name}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* IdeaDrop Modal */}
        <div id="ideaDrop">
          {showIdeaDrop && (
            <IdeaDrop onClose={handleCloseModal} />
          )}
        </div>

        {/* <ModelDialog id="ideaDrop" isOpen={modalIsOpen} closeModal={closeModal} content={State} /> */}

        {/* Rest of your code */}
      </section>

      {/* Footer content */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2023 <a href="#home" className="text-blue-300"> SoftHat Solution </a>. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              onClick={() => window.open(social.link)}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
