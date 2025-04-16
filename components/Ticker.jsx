import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
  '/images/agewell.png',
  '/images/bbi.png',
  '/images/bounce.png',
  '/images/genisis.png',
  '/images/LOI.png',
  '/images/NRC.png',
  '/images/technl.png',
];

const duplicatedLogos = [...logos, ...logos]; // Duplicate logos for a seamless loop

export default function Ticker() {
  return (
    <div className="overflow-hidden py-6 bg-gradient-to-r from-blue-50 to-teal-50">
      <motion.div
        className="flex gap-12"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }} // Animate container to -50% of its width for a seamless loop
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: 'linear',
        }}
      >
        {duplicatedLogos.map((src, i) => (
          <div
            key={i}
            className="min-w-[150px] flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`Logo ${i}`}
              width={220}  // Double logo width (adjust here to change size)
              height={80} // Double logo height (adjust here to change size)
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
