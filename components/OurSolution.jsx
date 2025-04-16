import { motion } from 'framer-motion';

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.15, duration: 0.5 }
  })
};

const features = [
  'Manage medication regimens effortlessly',
  'Prevent harmful drug and food interactions',
  'Support independent living with confidence',
  'Personalized guidance for your unique needs'
];

export default function OurSolution() {
  return (
    <section id="our-solution" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background shape */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-[-50px] right-[-100px] w-96 h-96 bg-teal-100/50 rounded-full blur-3xl -z-10"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl font-bold mb-6 text-blue-800 drop-shadow-sm">
            Our Solution
          </h2>
          <div className="relative inline-block mb-8">
            <motion.h3
              className="text-3xl font-semibold text-teal-600 relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              AGESTACK
            </motion.h3>
            {/* Decorative animated overlay */}
            <motion.span
              className="absolute inset-0 bg-teal-100/30 blur-xl -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            ></motion.span>
          </div>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            AGESTACK is our comprehensive platform designed to empower seniors by providing tools to manage medication regimens, prevent harmful interactions, and support independent living with confidence.
          </motion.p>
          <motion.a
            href="#contact-us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-600 transition-colors shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Learn More
          </motion.a>
        </motion.div>
        {/* Feature Grid */}
        <motion.div 
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={featureVariants}
              className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-gray-700 text-base">{feat}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
