import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { Mail, Send } from "lucide-react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: delay,
    },
  },
});

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36 px-4 sm:px-6">
      <div className="flex flex-wrap">
        {/* Left Column - Contact Options */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 lg:pb-16 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin tracking-tight text-center lg:mt-16"
            >
              Get in Touch
            </motion.h1>

            {/* Email Card */}
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="rounded-lg p-4 sm:p-6 shadow-md transition-shadow hover:shadow-lg mb-6 w-full max-w-md mx-auto"
            >
              <div className="mb-3 flex justify-center">
                <Mail className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="mb-1 text-center text-lg sm:text-xl text-gray-600">Email</h3>
              <p className="text-center text-sm sm:text-base text-gray-500">{CONTACT.email}</p>
              <div className="mt-4 text-center">
                <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center text-sm sm:text-base text-gray-600 hover:text-gray-800">
                  Write us <span className="ml-2">→</span>
                </a>
              </div>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              variants={container(0.75)}
              initial="hidden"
              animate="visible"
              className="rounded-lg p-4 sm:p-6 shadow-md transition-shadow hover:shadow-lg mb-6 w-full max-w-md mx-auto"
            >
              <div className="mb-3 flex justify-center">
                <svg className="h-6 w-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <h3 className="mb-1 text-center text-lg sm:text-xl text-gray-600">WhatsApp</h3>
              <p className="text-center text-sm sm:text-base text-gray-500">{CONTACT.phoneNo}</p>
              <div className="mt-4 text-center">
                <a href={`https://wa.me/${CONTACT.phoneNo}`} className="inline-flex items-center text-sm sm:text-base text-gray-600 hover:text-gray-800">
                  Write us <span className="ml-2">→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="w-full lg:w-1/2 lg:pt-16">
          <motion.div
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="lg:p-8 max-w-md mx-auto"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-6">
              <div>
                <label className="mb-1 sm:mb-2 block text-sm sm:text-base text-gray-600">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-gray-300 p-2 sm:p-3 text-sm sm:text-base focus:border-gray-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 sm:mb-2 block text-sm sm:text-base text-gray-600">Mail</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-gray-300 p-2 sm:p-3 text-sm sm:text-base focus:border-gray-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 sm:mb-2 block text-sm sm:text-base text-gray-600">Project</label>
                <textarea
                  placeholder="Describe your project"
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 p-2 sm:p-3 text-sm sm:text-base focus:border-gray-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center rounded-lg bg-gray-900 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white transition-colors hover:bg-gray-800 w-full justify-center"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
