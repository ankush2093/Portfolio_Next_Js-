"use client";

import { motion } from "framer-motion";
import { Mail, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const resumeUrl = '/ressume/resume_ankush.pdf';

  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ankush Resume.pdf'; // Set the desired filename
    link.target = '_blank';
    // Simulate a click on the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Ankush Kumar
          </h1>
          <h2 className="text-2xl text-muted-foreground mb-8">
            Full Stack Software Developer
          </h2>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
            <Button variant="default" size="lg" onClick={handleDownload}>
              <Terminal className="mr-2 h-4 w-4" /> Download My Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}