// "use client";

// import { motion } from "framer-motion";
// import { Code2 } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import { skills } from "@/lib/data";

// export function SkillsSection() {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-2 md:grid-cols-5 gap-4"
//         >
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="p-4 text-center hover:bg-muted/50 transition-colors">
//                 <Code2 className="h-6 w-6 mx-auto mb-2" />
               
//                 <p>{skill}</p>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { skills } from "@/lib/data";

export function SkillsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}  // Use title for key
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-4 text-center hover:bg-muted/50 transition-colors">
                <img 
                  src={skill.img}  // Fix image src
                  alt={skill.title}  // Add alt for accessibility
                  className="h-12 w-12 mx-auto mb-2" 
                />
                <p className="text-sm font-medium">{skill.title}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


