'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <section id="contact-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-800 drop-shadow-sm">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
              {submitted ? (
                <p className="text-teal-600 text-lg font-medium">Thank you! We’ll reach out soon.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-teal-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-teal-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-teal-500 transition-colors"
                      rows="4"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.95 }}
                    className="bg-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-600 transition-colors w-full"
                  >
                    Submit
                  </motion.button>
                </form>
              )}
              <p className="mt-6 text-sm text-gray-600 text-center">
                We aren’t going to spam you with emails or call you a thousand times. After you fill out the form, one of our advisors will reach out to schedule a time with you.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Get in Touch</h3>
              <p className="text-gray-600 mb-2 font-medium">Techleft Solutions Inc.</p>
              <p className="text-gray-600 mb-2">
                100 Signal Hill Rd #0100, St. John’s, Newfoundland and Labrador A1A 1B3, Canada
              </p>
              <p className="text-gray-600 mb-2">info@techleft.com</p>
              <p className="text-gray-600 mb-4">(709) 682-8992</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <motion.a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaFacebook size={28} />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  aria-label="Twitter"
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaTwitter size={28} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaLinkedin size={28} />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaInstagram size={28} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}