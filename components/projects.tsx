"use client";

import React from 'react';
import Secheading from './secheading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';


const Projects = () => {
  
  const { ref } = useSectionInView("Projects", 0.4);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <Secheading>My Projects</Secheading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>

    </section>
  );
}

export default Projects;