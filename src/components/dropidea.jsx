import { useState } from 'react';

function IdeaDrop({ onClose }) {
    const [show, setShow] = useState(true);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [idea, setIdea] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleClose = () => {
        if (!loading) {
            setShow(false);
            onClose();
        }
    };

    const handleSendEmail = () => {
        setLoading(true);

        // Simulating email sending delay for demonstration purposes
        setTimeout(() => {
            if (isValid) {
                // Logic to send the email goes here
                // Implement the functionality to send the email
                // For demo purposes, let's just close the modal

                setLoading(false);
                setShow(false);
                onClose();
            } else {
                setLoading(false);
                setEmailError('Please enter a valid email address.');
            }
        }, 2000); // Simulated delay of 2 seconds (replace with actual email sending logic)
    };

    const validateEmail = (value) => {
        setEmail(value);
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(regex.test(value));
        setEmailError('');
    };

    const handleChangeEmail = (e) => {
        validateEmail(e.target.value);
    };

    const handleChangeIdea = (e) => {
        setIdea(e.target.value);
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 ${show ? '' : 'hidden'}`}>
            <div className="bg-primary p-6 rounded-lg shadow-lg w-full md:max-w-md">
                <div className="flex justify-between items-center">
                    <h2 className="font-poppins font-semibold text-2xl md:text-3xl text-white leading-10">Drop an Idea!</h2>
                    <button onClick={handleClose} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-1 text-white">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={handleChangeEmail}
                            className={`w-full border ${isValid ? 'border-gray-300' : 'border-red-500'} rounded px-3 py-2`}
                        />
                        {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="idea" className="block text-sm font-semibold mb-1 text-white">Describe your suggestions or idea here</label>
                        <textarea
                            id="idea"
                            rows={3}
                            value={idea}
                            onChange={handleChangeIdea}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" onClick={handleClose} className="px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2 focus:outline-none" disabled={loading}>
                            Close
                        </button>
                        <button
                            type="button"
                            onClick={handleSendEmail}
                            className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Email!'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default IdeaDrop;
