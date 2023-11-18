import styles from "../style";
import ContactUs from "./ContactUs";
import { Helmet } from "react-helmet";

const CTA = () => (
  <>
  <Helmet>
                <title>Soft Hat Solution</title>
                <meta name="description" content="It Solutions, Web designing, web development, app development, Application development." />
                {/* Add more meta tags as needed for SEO */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="IT, Technology, AI, Solutions, Web, Design, Development, App, Application, Near, me, Software, Online, Marketing, Website, contact IT" />
                <meta name="author" content="Your Name" />
                <meta name="robots" content="index, follow" />
            </Helmet>
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`} id='contact'>
    <div className="flex-1 flex flex-col" data-aos='fade-right'>
      <h2 className={styles.heading2}>Let's try our services</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
        Everything you need to do is, think about your business and we will make it happen online for you
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 w-1/4`}>
      <ContactUs />
    </div>
  </section>
  </>
);

export default CTA;