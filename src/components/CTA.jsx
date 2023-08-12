import styles from "../style";
import ContactUs from "./ContactUs";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let's try our services</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Everything you need to do is, think about your business and we will make it happen online for you
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 w-1/4`}>
      <ContactUs />
    </div>
  </section>
);

export default CTA;