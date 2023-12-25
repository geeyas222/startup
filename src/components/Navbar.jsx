import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>NavBar - Soft Hat Solution</title>
        <meta name="description" content="It Solutions, Web designing, web development, app development, Application development." />
        {/* Add more meta tags as needed for SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="IT, Technology, AI, Solutions, Web, Design, Development, App, Application, Near, me, Software, Online, Marketing, Website" />
        <meta name="author" content="Your Name" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <nav className="w-full bottom-0 flex py-6 justify-between items-center navbar transition-all duration-200" data-aos='zoom-in-down' data-aos-duration='1300'>
        <a href="#home"><img src={logo} alt="hoobank" className={`w-[222px] h-[32px]`} loading="lazy" /></a>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} ${scrolled ? 'text-xl font-white mr-6 ml-1' : ''} transition-all duration-1500`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center z-50">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
            loading="lazy"
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col z-50">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;