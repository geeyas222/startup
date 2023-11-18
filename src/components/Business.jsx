import { features } from "../constants";
import { Helmet } from "react-helmet";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
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
    <div className={`flex flex-row p-6 rounded-[100px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card `}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" loading="lazy"/>
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  </>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo} data-aos='fade-right'>
      <h2 className={styles.heading2}>
        Focus Business, <br className="sm:block hidden " /> We'll Shape and<br className="sm:block hidden" /> Elevate Your Online Presence.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
        At <a href="#home" className="text-blue-300"> SoftHat Solution</a>, we understand the demands of running a successful business. Let us take the reins of your online journey - from designing captivating websites to establishing your digital footprint. Our tailored solutions empower you to concentrate on what you do best, while we seamlessly translate your vision into a compelling online reality that resonates with your audience and drives growth.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`} data-aos='fade-left'>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;