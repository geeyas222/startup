import styles from "../style";
import { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
    });

    // Regular expressions for email and phone validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^[0-9]{10}$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields before submitting the form
        const newErrors = {
            name: formData.name ? '' : 'Name is required',
            email: emailRegex.test(formData.email) ? '' : 'Invalid email address',
            phone: phoneRegex.test(formData.phone) ? '' : 'Invalid phone number',
        };

        setErrors(newErrors);

        // If there are no errors, you can proceed with form submission
        if (!Object.values(newErrors).some((error) => error !== '')) {
            // Perform form submission logic here
            console.log('Form submitted:', formData);

            // Reset the form fields
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });

            // Clear any error messages
            setErrors({
                name: '',
                email: '',
                phone: '',
            });
        }


    };

    return (
        <section data-aos='fade-left'>
            <form className='p-1' onSubmit={handleSubmit}>
                <div className='mb-2 '>
                    <label className={`text-white block text-sm font-medium leading-6 ${styles.paragraph}`}>FullName</label>
                    <input type='text'
                        className='block w-[300px] md:w-[300px] sm:w-[200px] rounded-md border-0 py-1.5 text-gray-900 font-bold text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:shadow-gray-300 sm:text-sm sm:leading-6'
                        placeholder='Enter your name'
                        name="name"
                        value={formData.name}
                        onChange={handleChange} />
                    {errors.name && <span className="error text-red-500">{errors.name}</span>}
                </div>
                <div className='mb-2 '>
                    <label className={`text-white block text-sm font-medium leading-6 ${styles.paragraph}`}>Email</label>
                    <input type='email'
                        className='block w-[300px] md:w-[300px] sm:w-[200px] rounded-md border-0 py-1.5 text-gray-900 font-bold text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:shadow-gray-300 sm:text-sm sm:leading-6'
                        placeholder='Enter your email'
                        name="email"
                        value={formData.email}
                        onChange={handleChange} />
                    {errors.email && <span className="error text-red-500">{errors.email}</span>}
                </div>
                <div className='mb-2 '>
                    <label className={`text-white block text-sm font-medium leading-6 ${styles.paragraph}`}>Phone</label>
                    <input type='text' className='block w-[300px] md:w-[300px] sm:w-[200px] rounded-md border-0 py-1.5 text-gray-900 font-bold text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:shadow-gray-300 sm:text-sm sm:leading-6' placeholder='Enter your phone' name="phone" value={formData.phone} onChange={handleChange} />
                    {errors.phone && <span className="error text-red-500">{errors.phone}</span>}
                </div>
                <div className='mb-2 '>
                    <label className={`text-white block text-sm font-medium leading-6 ${styles.paragraph}`}>Message</label>
                    <textarea type='text' name="message" className='block w-[300px] md:w-[300px] sm:w-[200px] rounded-md border-0 py-1.5 text-gray-900 font-bold text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:shadow-gray-300 sm:text-sm sm:leading-6' placeholder='Enter your Message' value={formData.message} onChange={handleChange} />
                </div>

                <div>
                    <button type="submit" className={`w-[300px] md:w-[300px] sm:w-[200px] py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} mt-10`}>
                        {/* <a href="/">Submit</a> */}Submit
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ContactUs