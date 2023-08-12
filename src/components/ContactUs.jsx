import styles from "../style";
const ContactUs = () => {
    return (
        <section data-aos='fade-left'>
            <form className='p-1'>
                <div className='mb-2 '>
                    <label className={`text-white block text-sm font-medium leading-6 ${styles.paragraph}`}>FullName</label>
                    <input type='text' className='block w-[300px] md:w-[300px] sm:w-[200px] rounded-md border-0 py-1.5 text-gray-900 font-bold text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:shadow-gray-300 sm:text-sm sm:leading-6' placeholder='Enter your name' />
                </div>
                <div className='mb-2 '>
                    <label className={`text-white block text-sm font-medium leading-6 ${styles.paragraph}`}>Email</label>
                    <input type='email' className='block w-[300px] md:w-[300px] sm:w-[200px] rounded-md border-0 py-1.5 text-gray-900 font-bold text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:shadow-gray-300 sm:text-sm sm:leading-6' placeholder='Enter your email' />
                </div>
                <div className='mb-2 '>
                    <label className={`text-white block text-sm font-medium leading-6 ${styles.paragraph}`}>Phone</label>
                    <input type='text' className='block w-[300px] md:w-[300px] sm:w-[200px] rounded-md border-0 py-1.5 text-gray-900 font-bold text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:shadow-gray-300 sm:text-sm sm:leading-6' placeholder='Enter your phone' />
                </div>

                <div>
                    <button type="button" className={`w-[300px] md:w-[300px] sm:w-[200px] py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} mt-10`}>
                        <a href="/">Submit</a>
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ContactUs