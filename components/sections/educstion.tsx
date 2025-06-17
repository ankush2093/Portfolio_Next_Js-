'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const educationData = [
  {
    title: 'B.Tech in Computer Science and Engineering',
    institution: 'Centurion University of Technology and Management',
    duration: 'Dec 2020 - May 2024',
    grade: '8.22 CGPA',
    logo: '/education/cutmogo.png',
  },
  {
    title: 'I.Sc - Intermediate of Science, PCMB with English',
    institution: 'R. C. S. S. College, Bihat',
    duration: 'Jan 2016 - Sep 2018',
    grade: '62%',
    logo: '/education/bseb.jpg',
  },
  {
    title: 'CBSE (Matriculation)',
    institution: 'St Judes Vidyalaya Phulwaria, Begusarai',
    duration: 'June 2015 - May 2016',
    grade: '7.4 CGPA',
    logo: '/education/cbse.jpg',
  },
];

export function EducationSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Education</h1>
        <p className="text-gray-700 dark:text-muted-foreground mb-8">
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </p>

        <div className="relative w-full max-w-3xl">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/60 to-primary/10 rounded-full"></div>

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative border border-primary/50 p-6 rounded-xl bg-secondary shadow-lg ml-10"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-28px] top-6 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>

                <div className="flex items-center space-x-4">
                  <Image src={edu.logo} alt={edu.title} width={80} height={80} className="rounded-full" />
                  <div className="text-left">
                    <h2 className="text-lg font-semibold text-black dark:text-white">{edu.title}</h2>
                    <p className="text-sm text-gray-700 dark:text-muted-foreground">{edu.duration}</p>
                    <p className="text-sm text-black dark:text-gray-400 font-semibold">Grade: {edu.grade}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      I completed my {edu.title.split(' ')[0]} at {edu.institution}.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



