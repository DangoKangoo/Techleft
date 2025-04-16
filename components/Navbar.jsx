'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Who We Are', href: '#who-we-are' },
    { name: 'Our Solution', href: '#our-solution' },
    { name: 'The Team', href: '#the-team' },
    { name: 'Contact Us', href: '#contact-us' },
  ];

  const handleScrollToHero = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl z-50">
      {/* Wider container with custom side padding */}
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Brand Name */}
          <div className="flex items-center space-x-3">
            <Link href="/#hero" onClick={handleScrollToHero} className="flex items-center">
              <Image
                src="/images/TLLogo.png"
                alt="Techleft Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-blue-800 ml-2">Techleft</span>
            </Link>
          </div>

          {/* Desktop Nav Links (shows if width >= 920px) */}
          <div className="hidden [@media(min-width:920px)]:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ color: '#38B2AC' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
                className="text-gray-800 text-base font-medium relative"
              >
                {link.name}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-teal-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.1 }}
                />
              </motion.a>
            ))}
            {/* Pre-order Button */}
            <motion.a
              href="mailto:preorder@techleft.com?subject=Pre-order Request&body=Hello, I am interested in pre-ordering your product. Please provide more information."
              whileHover={{ boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2 rounded-full font-semibold text-base hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg flex items-center space-x-2"
            >
              <span>Pre-order Now</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
          </div>

          {/* Mobile Toggle (shows if width < 920px) */}
          <div className="flex [@media(min-width:920px)]:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu with improved slide-down animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="[@media(min-width:920px)]:hidden bg-white shadow-lg"
          >
            <div className="px-6 pt-4 pb-6 space-y-3 sm:px-8 lg:px-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-800 text-base font-medium hover:text-teal-500 px-3 py-2 transition-colors duration-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {/* Pre-order Button for Mobile */}
              <a
                href="mailto:preorder@techleft.com?subject=Pre-order Request&body=Hello, I am interested in pre-ordering your product. Please provide more information."
                className="block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2 rounded-full font-semibold text-base hover:from-teal-600 hover:to-teal-700 transition-all duration-300 mx-3 mt-4 text-center"
              >
                Pre-order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
