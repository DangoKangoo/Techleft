import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TheTeam() {
  const team = [
    {
      name: 'Kenneth Nwankwo',
      title: 'CEO & Co-Founder',
      bio: 'Kenneth is a mechanical engineer EIT, a certificate in business administration holder, a certificate in technical sales holder, and a caregiver who co-founded Techleft because of troubling experiences around quality of life of seniors that live in retirement long-term care facilities, compared to those that lived and got care at their homes. Kenneth was named among 20 Under 30 Innovators for 2023 by Atlantic Business Magazine.',
      image: '/images/Ken.png',
    },
    {
      name: 'Viral Galaiya',
      title: 'CTO & Co-Founder',
      bio: 'Viral is an electrical engineer and a computer scientist who co-founded Techleft after understanding the magnitude of assistance that technology can render to seniors when used from an earlier age. Viral has experience working with a robotic solution startup and played a key role in the development of the MVP. Viral was named among 20 Under 30 Innovators for 2023 by Atlantic Business Magazine.',
      image: '/images/Viral-1024x839.png',
    },
  ];

  return (
    <section id="the-team" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800 drop-shadow-sm">
          Meet The Team
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-teal-500 text-center flex flex-col items-center"
            >
              <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-700">{member.name}</h3>
              <p className="text-teal-600 mb-4 font-medium">{member.title}</p>
              <p className="text-gray-600 leading-relaxed max-w-md text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}