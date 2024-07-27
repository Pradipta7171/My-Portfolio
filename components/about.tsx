"use client";

import React from 'react';
import Secheading from './secheading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

// about section

const About = () => {

  const { ref } = useSectionInView("About", 0.80);

  return (
    <motion.section
      ref = {ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <Secheading>Personal Insights</Secheading>
      <div className="space-y-3">
        <p>
          From crafting intuitive <span className="font-medium">user interfaces</span> to architecting robust <span className="font-medium">backend systems</span>, I thrive on creating innovative and user-friendly web applications. My journey began with immersing myself in various web development courses, mastering the art of <span className="font-medium">full-stack web development</span>.
        </p>
        <p className="text-lg font-medium italic">
          "The thrill of problem-solving is what ignites my passion for programming."
        </p>
        <p>
          My toolbox includes a powerful core stack: <span className="font-medium">React</span>, <span className="font-medium">Next.js</span>, <span className="font-medium">Node.js</span>, and <span className="font-medium">MongoDB</span>. I'm also familiar with <span className="font-medium">TypeScript</span> and <span className="font-medium">Prisma</span>, always eager to expand my technical knowledge.
        </p>
        <p>
          What sets me apart? An insatiable hunger for knowledge and innovation. I'm constantly on the lookout for the latest industry trends, ready to dive into new technologies head-first.
        </p>
        <p>
          <span className="italic">Beyond the realm of web development</span>, I channel my creativity into <span className="font-medium">Graphic Design</span>, adding another dimension to my skill set.
        </p>
        <p>
          As I embark on the next chapter of my journey, I'm seeking a <span className="font-medium">full-time position</span> as a software developer. I'm excited to bring my skills, drive, and fresh perspectives to a dynamic team, ready to turn visions into reality.
        </p>
        <p className="text-lg text-center font-medium">
          Let's create something extraordinary together!
        </p>
      </div>
    </motion.section>
  );
};

export default About;
