import { useState, useEffect } from "react";
import styles from './style';
import { Navbar, Hero, Stats, Business, CardDeal, CTA, Footer, Billing, } from './components';
import Project from './components/Project';
import Price from "./components/Price";
import Aboutus from "./components/Aboutus";
// import Testimonials from "./components/testomonials";

const App = () => {
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
    <div className='bg-primary w-full overflow-hidden'>
      <div className={` ${styles.paddingX} ${styles.flexCenter}  fixed top-0 left-0 w-full p-1 z-50 ${scrolled ? 'bg-primary shadow-lg rounded-full bg-opacity-60' : ''}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />{/*Navigation Bar  */}
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero /> {/*Hero section with slogan and image on side  */}
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> {/*Stats with counter  */}
          <Billing /> {/*responsice web app building service */}
          <CardDeal /> {/*Tech Support service*/}
          <Business /> {/*Design webapp for business service*/}
          <Project /> {/*projects*/}
          {/* <Price /> price cards */}
          <CTA /> {/*contact us Form*/}
          <Aboutus /> {/*About us Section*/}
          <Footer /> {/*Footer section*/}
        </div>
      </div>
      {/* <Testomonials /> */}
      {/* <Client /> */}
    </div>
  )
}

export default App