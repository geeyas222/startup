import { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../style';
import Spinner from './Spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function IdeaDrop({ onClose }) {
    const [show, setShow] = useState(true);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [message, setMessage] = useState('');
    const [isSpinner, setSpinner] = useState(false);

    const handleClose = () => {
        setShow(false);
        onClose();
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSendEmail = () => {
        setSpinner(true);
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            toast.error('Invalid email entered.');
        } else {
            const templateParams = {
                email: email,
                message: message // Include the message content
            };

            emailjs
                .send('service_aex7qzk', 'template_okfk46w', templateParams, 'cL4-EtHANHUHjHF1V')
                .then((response) => {
                    toast.success('Email sent successfully!', response);
                    handleClose();
                })
                .catch((error) => {
                    toast.error('Error sending email:', error);
                });
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === 'email') {
            setEmail(value);
            setEmailError('');
        } else if (id === 'idea') {
            setMessage(value);
        }
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 ${show ? '' : 'hidden'}`}>
            <div className="bg-primary p-6 rounded-lg shadow-lg w-full md:max-w-md">
                <div className="flex justify-between items-center">
                    <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px">Drop an Idea!</h2>
                    <button onClick={handleClose} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="font-poppins font-medium text-[14px] leading-[37px] text-white">Email address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleInputChange}
                            placeholder="name@example.com"
                            className={`w-full border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2`}
                        />
                        {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="idea" className="font-poppins font-medium text-[14px] leading-[37px] text-white">Describe your suggestions or idea here</label>
                        <textarea
                            id="idea"
                            rows={3}
                            value={message}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        ></textarea>
                    </div>
                    <button
                        type="button"
                        onClick={handleSendEmail}
                        className={`w-[200px] md:w-[300px] sm:w-[200px] py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} mt-10`}
                    >
                        {isSpinner ? <Spinner /> : ''}
                        Drop Idea!
                    </button>
                </form>
            </div>
        </div>
    );
}

export default IdeaDrop;
