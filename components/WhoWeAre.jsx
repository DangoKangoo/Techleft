import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introductory Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-800 drop-shadow-sm">
            Who We Are
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Techleft, we’re committed to helping seniors age in place with confidence and peace of mind. With our innovative approach to preventing harmful medication non-adherence and adherence‐leading to interactions, we ensure your health remains our priority. We make it easier for you to navigate medication regimens, diet plans, and medical conditions—all tailored to your unique needs.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/Team-1024x934.jpg"
                alt="Our Team"
                width={1024}
                height={934}
                style={{ width: '100%', height: 'auto' }}
                className="rounded-xl shadow-xl border-2 border-blue-200"
              />
            </div>
          </div>
        </motion.div>

        {/* Cost & Challenges Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">
            What is the Cost of Medication Non-adherence and Interactions?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Aging in place is a preferred choice for many seniors. It provides emotional, social, 
            and psychological benefits, but it also presents unique challenges—especially for seniors 
            managing multiple medications and dietary supplements.
          </p>
        </motion.div>

        {/* Co-Founder Kenneth's Story Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">
            Co-Founder Kenneth’s Story
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our co-founder, Kenneth, has firsthand experience with these challenges. After spending four years as a 
            caregiver in both home care and long-term care settings, he witnessed how harmful medication non-adherence 
            and adherence‐leading to interactions—whether drug–drug, drug–food, or drug–condition—can quickly lead to a 
            decline in a senior’s health. Unfortunately, these interactions often result in seniors losing their ability 
            to live independently and being forced into long-term care facilities. Many seniors even had to leave the communities 
            they had called home for decades.
            <br /><br />
            Kenneth’s experiences inspired our mission: to help seniors age in place—safer.
          </p>
        </motion.div>

        {/* The Growing Challenge Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">
            The Growing Challenge of Medication Non-adherence and Interactions
          </h3>
          <p className="text-gray-600 leading-relaxed">
            For seniors, medication non-adherence and interactions are critical concerns. Polypharmacy— 
            the use of multiple medications and dietary supplements—is a growing issue among aging adults, compounded 
            by burnout among healthcare providers. Without proper management, these interactions can lead to serious 
            health complications, emergency hospitalizations, or even premature entry into assisted living amid a shortage 
            of long-term care beds.
            <br /><br />
            At Techleft, we are committed to addressing this urgent issue. We provide seniors with the tools and guidance 
            to manage their health safely, helping them remain at home longer and with greater peace of mind.
          </p>
        </motion.div>

        {/* Vision, Mission & Core Values */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-blue-50 p-8 rounded-lg shadow-md border-l-4 border-blue-500"
          >
            <h4 className="text-xl font-semibold mb-3 text-blue-600">Our Vision</h4>
            <p className="text-gray-600">
              To deliver a comprehensive platform that empowers seniors to safely age in their homes with dignity and support.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-blue-50 p-8 rounded-lg shadow-md border-l-4 border-blue-500"
          >
            <h4 className="text-xl font-semibold mb-3 text-blue-600">Our Mission</h4>
            <p className="text-gray-600">
              To help seniors age in place—safer.
            </p>
          </motion.div>
        </div>

        {/* Core Values Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-700">
            Core Values
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-blue-600">Technology for a Difference</h4>
              <p className="text-gray-600">
                Leveraging technology to minimize the challenges faced by seniors, families, and home care providers.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-blue-600">Compassion</h4>
              <p className="text-gray-600">
                We stand together with seniors and their families, committed to making every moment count.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-blue-600">Community</h4>
              <p className="text-gray-600">
                Cherishing the communities that have shaped seniors’ lives and working to strengthen these connections.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-blue-600">Live Well</h4>
              <p className="text-gray-600">
                Prioritizing seniors’ quality of life, ensuring their homes are optimized for safe, comfortable living.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
