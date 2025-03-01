"use client";
import { motion } from "framer-motion";
import { FileDown, SquareChartGantt } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "../../public/herosection.png"; // Update with actual path
import { useRouter } from 'next/navigation';


export function HeroSection() {
  const resumeUrl = '/ressume/resume_ankush.pdf';

  const router = useRouter();
  const handleProjectClick = () => {
    router.push('#projects');
  };



  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ankush Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl pt-10 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Ankush Kumar
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full Stack Software Developer
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I design and develop intuitive web applications using HTML5, CSS3, SCSS, JavaScript, React and Next.js. With expertise in Express and Nest.js, I create seamless, user-centric experiences that simplify and enhance everyday life.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
              <Button variant="outline" size="lg" className="w-full md:w-auto" onClick={handleProjectClick}>
                <SquareChartGantt className="mr-2 h-4 w-4" /> Look My Project
              </Button>
              <Button variant="default" size="lg" onClick={handleDownload} className="w-full md:w-auto">
                <FileDown className="mr-2 h-4 w-4" /> @Hire Me !
              </Button>
            </div>
          </motion.div>
          {/* <div className="relative w-full mt-8 md:mt-0">
            <div className="rounded-tl-[150px] rounded-br-[150px] border-t-8 border-b-8 border-l-2 border-r-2 border-yellow-600 roudned-sm overflow-hidden">
              <Image
                src={heroImage}
                alt="Hero Image"
                // layout="responsive"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div> */}

          <div className="relative w-full mt-8 md:mt-0">
            <div className="rounded-tl-[150px] rounded-br-[150px] border-t-8 border-b-8 border-l-2 border-r-2 border-yellow-600 rounded-sm overflow-hidden">
              <Image
                src={heroImage}
                alt="Hero Image"
                width={400}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );


}
