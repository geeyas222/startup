import { stats } from "../constants";
import styles from "../style";
import { Helmet } from "react-helmet";

const Stats = () => (
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
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`} data-aos='flip-left'>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  </>
);

export default Stats;