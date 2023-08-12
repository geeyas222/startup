import React from 'react'

const ContactUs = () => {
    return (
        <section id='contact' className='w-full'>
                <form className='p-1'>
                <div className='mb-2 '>
                        <label className='text-white block text-sm font-medium leading-6'>FullName</label>
                        <input type='text' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                    </div>
                    <div className='mb-2 '>
                        <label className='text-white block text-sm font-medium leading-6'>Email</label>
                        <input type='email' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                    </div>
                    <div className='mb-2 '>
                        <label className='text-white block text-sm font-medium leading-6'>Phone</label>
                        <input type='text' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                    </div>
                    <div className='mb-2 '>
                        <label className='text-white block text-sm font-medium leading-6'>Address</label>
                        <input type='text' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                    </div>
                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                    </div>
                </form>            
        </section>
    )
}

export default ContactUs