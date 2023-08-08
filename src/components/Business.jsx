import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[100px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card `}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
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
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Focus Business, <br className="sm:block hidden " /> We'll Shape and<br className="sm:block hidden" /> Elevate Your Online Presence.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
        At <a href="#home" className="text-blue-300"> OurssTech</a>, we understand the demands of running a successful business. Let us take the reins of your online journey - from designing captivating websites to establishing your digital footprint. Our tailored solutions empower you to concentrate on what you do best, while we seamlessly translate your vision into a compelling online reality that resonates with your audience and drives growth.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;