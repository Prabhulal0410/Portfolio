'use client';
import { useState } from 'react';
import Image from 'next/image';
import ContactImg from '../../../../public/img/contact-img.svg';

export default function Contact() {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    // Simulate sending message (no network)
    setTimeout(() => {
      setButtonText('Send');
      setFormDetails(formInitialDetails); // reset form
      setStatus({ success: true, message: 'Thank you! Your message has been sent.' });
    }, 1000); // 1-second delay
  };

  return (
    <section
      id="connect"
      className="bg-gradient-to-r from-[#a03582] via-[#7a329c] to-[#5830b3] py-16 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-around gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <Image
            src={ContactImg}
            alt="Contact Us"
            width={400}
            height={400}
            className="animate-zoomIn max-w-full h-auto"
            priority
          />
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center lg:text-left">
            Get In Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formDetails.firstName}
                placeholder="First Name"
                onChange={(e) => onFormUpdate('firstName', e.target.value)}
                className="w-full h-12 sm:h-14 rounded-xl border border-white bg-white/25 text-white placeholder-white px-3 sm:px-4"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formDetails.lastName}
                placeholder="Last Name"
                onChange={(e) => onFormUpdate('lastName', e.target.value)}
                className="w-full h-12 sm:h-14 rounded-xl border border-white bg-white/25 text-white placeholder-white px-3 sm:px-4"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                value={formDetails.phone}
                placeholder="Phone"
                onChange={(e) => onFormUpdate('phone', e.target.value)}
                className="w-full h-12 sm:h-14 rounded-xl border border-white bg-white/25 text-white placeholder-white px-3 sm:px-4"
                required
              />
              <input
                type="email"
                name="email"
                value={formDetails.email}
                placeholder="Email"
                onChange={(e) => onFormUpdate('email', e.target.value)}
                className="w-full h-12 sm:h-14 rounded-xl border border-white bg-white/25 text-white placeholder-white px-3 sm:px-4"
                required
              />
            </div>

            <textarea
              name="message"
              rows="5"
              value={formDetails.message}
              placeholder="Message"
              onChange={(e) => onFormUpdate('message', e.target.value)}
              className="w-full h-24 sm:h-28 rounded-xl border border-white bg-white/25 text-white placeholder-white p-3 sm:p-4 resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full h-12 sm:h-14 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300"
            >
              {buttonText}
            </button>

            {status.message && (
              <p className={`mt-3 text-center ${status.success ? 'text-green-400' : 'text-red-500'}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-zoomIn {
          animation: zoomIn 1s ease forwards;
        }
      `}</style>
    </section>
  );
}
