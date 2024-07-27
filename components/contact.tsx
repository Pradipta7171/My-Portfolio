"use client";

import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Secheading from './secheading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import Submitbtn from './submitbtn';
import toast from 'react-hot-toast';

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.4);

  const contactInfo = [
    { icon: FaEnvelope, text: 'prodipto7171@gmail.com', href: 'mailto:prodipto7171@gmail.com' },
    { icon: FaLinkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/in/pradipto-dutta2024' },
    { icon: FaGithub, text: 'GitHub', href: 'https://github.com/Pradipta7171' },
    { icon: FaInstagram, text: 'Instagram', href: 'https://www.instagram.com/your_instagram' }
  ];

  return (
    <motion.section
      id="contact" 
      ref={ref} 
      className="py-16 bg-gray-100 mb-20 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <Secheading>Get In Touch</Secheading>
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="bg-gradient-to-br from-indigo-800 to-purple-900 dark:from-indigo-900 dark:to-purple-950 p-8 md:p-12 text-white md:w-2/5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h3>
                <p className="mb-8 text-sm md:text-base opacity-90">I'm currently looking for new opportunities. Feel free to reach out!</p>
              </div>
              <ul className="space-y-6">
                {contactInfo.map(({ icon: Icon, text, href }, index) => (
                  <li key={index} className="flex items-center group">
                    <Icon className="mr-4 text-2xl group-hover:text-indigo-300 transition-colors duration-300" />
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm md:text-base group-hover:text-indigo-300 transition-colors duration-300">{text}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-12 md:w-3/5">
              <form 
                className="flex flex-col space-y-6 dark:text-gray-300"
                action={async (formData) => {
                  const { data, error } = await sendEmail(formData);
                  if (error) {
                    toast.error(error);
                    return;
                  }
                  toast.success("Email sent successfully!");
                }}
              >
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-sm md:text-base">Email</label>
                  <input
                    name="senderEmail"
                    type="email"
                    placeholder="Enter your email"
                    className="h-14 w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 text-gray-900 dark:text-white text-sm md:text-base"
                    required
                    maxLength={100}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
                  <textarea
                    name='message'
                    placeholder='Enter your message'
                    className="h-52 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 text-gray-900 dark:text-white resize-none"
                    required
                    maxLength={5000}
                  ></textarea>
                </div>

                <Submitbtn />
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;