"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-muted-foreground mb-8">
          As a passionate software developer with over a year of experience, 
          I focus on building modern, scalable, and high-performance web applications. 
          I specialize in using the latest technologies like React, Next.js, Express, and Nest.js to create seamless and user-friendly experiences. 
          I’m committed to delivering efficient solutions that solve real-world problems, 
          continuously learning and adapting to new tools and trends to stay ahead in this fast-evolving field.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="https://github.com/ankush2093" target="_blank">
              <Button variant="ghost" size="icon">
                <Github className="h-10 w-10  hover:bg-pink-700" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/ankush2093/" target="_blank">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-10 w-10  hover:bg-sky-700" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}