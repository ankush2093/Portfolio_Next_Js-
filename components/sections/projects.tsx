"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/data";
import { useState } from "react";

export function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 6;

  const start = currentPage * perPage;
  const end = start + perPage;

  const visibleProjects = projects.slice(start, end);
  const totalPages = Math.ceil(projects.length / perPage);

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full flex flex-col card example-5">
                <div>
                   <img className="rounded-md" src={project.img} alt={project.title} />
                </div>
                <h3 className="text-xl font-bold mb-3 mt-3">
                   {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                   {project.description}
                </p>
                <h4 className="text-x font-bold">{project.note}</h4>

                <div className="flex flex-wrap gap-2 mb-4">
                   {project.tech.map((tech) => (
                     <div key={tech}>
                       <span className="px-2 py-1 bg-primary/10 rounded-full text-sm">
                         {tech}
                       </span>
                     </div>
                   ))}
                 </div>

                 <Button className="example-4" variant="outline" asChild>
                   <Link href={project.link}>
                     View Project
                   </Link>
                 </Button>
               </Card>
            </motion.div>
          ))}
        </div>

        {/* pagination controls */}
        <div className="flex justify-center mt-10 gap-4">
          <Button
            variant="outline"
            disabled={currentPage <= 0}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </Button>

          <Button
            variant="outline"
            disabled={currentPage >= totalPages - 1}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
}
