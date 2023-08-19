import styles from "../style";
import { cards } from "../constants/index";

const Price = ({ title, description, price, features }) => {
    return (

        <div className="bg-black-gradient-2 shadow-2xl shadow-blue hover:shadow-xl hover:shadow-gray-500 rounded-lg p-6 w-full md:w-1/4" id="price" data-aos='fade-up'>
            <h2 className="text-3xl font-bold text-white sm:underline md:underline underline text-left sm:text-center md:text-center">{title}</h2>
            <p className="mt-4 text-white">{description}</p>
            <div className="mt-6">
                <p className="text-3xl font-semibold text-white">{price}</p>
                <p className="text-sm text-white">per month</p>
            </div>
            <ul className="mt-6 space-y-4">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg
                            className="h-5 w-5 text-green-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        <p className="text-white">{feature}</p>
                    </li>
                ))}
            </ul>
            <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} mt-10`}>
                <a href="#contact">Contact Us</a>
            </button>
        </div>
    );
};

const PriceCards = () => {
    return (
        <div className="flex flex-wrap justify-center gap-8">
            {/* Below 'cards' is mapping from the json file which is coming from index.js file from components */}
            {cards.map((card, index) => (
                <Price key={index} {...card} />
            ))}
            <br className="sm:block hidden" />
        </div>
    );
};
export default PriceCards