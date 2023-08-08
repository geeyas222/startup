import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        We fix your IT problems <br className="sm:block hidden" /> <span className="text-3xl">Small</span> to <span className="text-7xl">Big</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
        At <a href="#home" className="text-blue-300">OurssTech</a>, we've got you covered with a comprehensive range of IT solutions. Whether you're facing minor PC troubles or complex tasks like software installation, printer setup, data migration, or network configuration, our expert team is here to provide seamless resolutions. No challenge is too big or small for us trust us to be your go-to partner for all your IT needs.
        <br className="sm:block hidden" />
        <a href="#home" className="text-blue-300"> OurssTech </a> is always there for you!
      </p>

      {/* <Button styles={`mt-10`} /> */}
      <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} mt-10`}>
        <a href="#service">Services</a>
      </button>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;