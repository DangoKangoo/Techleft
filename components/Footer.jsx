import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Techleft</h3>
            <p className="text-blue-100 leading-relaxed">
              Helping seniors age in place with confidence and peace of mind.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-blue-100">
              100 Signal Hill Rd #0100, St. John’s, NL A1A 1B3, Canada
            </p>
            <p className="text-blue-100">info@techleft.com</p>
            <p className="text-blue-100">(709) 682-8992</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                href="https://facebook.com"
                aria-label="Facebook"
                whileHover={{ scale: 1.1 }}
                className="text-blue-200 hover:text-white"
              >
                <FaFacebook size={28} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                aria-label="Twitter"
                whileHover={{ scale: 1.1 }}
                className="text-blue-200 hover:text-white"
              >
                <FaTwitter size={28} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                className="text-blue-200 hover:text-white"
              >
                <FaLinkedin size={28} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                className="text-blue-200 hover:text-white"
              >
                <FaInstagram size={28} />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-blue-200 text-sm">
          © {new Date().getFullYear()} Techleft Solutions Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}