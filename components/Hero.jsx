import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-teal-400 text-white pt-16 overflow-hidden"
    >
      {/* Background Overlay for Depth */}
      <div className="absolute inset-0 bg-blue-900/20 z-0"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
              Preventing Medication Non-Adherence for Seniors
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Empowering seniors to age in place safely with innovative solutions tailored to their needs.
            </p>
            <motion.a
              href="mailto:preorder@techleft.com?subject=Pre-order Request&body=Hello, I am interested in pre-ordering your product. Please provide more information."
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-600 transition-colors shadow-lg"
            >
              Pre-order Now
            </motion.a>
          </motion.div>
          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/images/couple.png"
              alt="Elderly Couple"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl border-4 border-white/30 w-full h-auto"
            />
            {/* Decorative Overlay */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-300/30 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}