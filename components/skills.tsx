"use client";

import React from 'react';
import Secheading from './secheading';
import { skillsData } from '@/lib/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

const fadeIn = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.04 * index,
        },
    }),
};

function Skills() {

    const { ref } = useSectionInView("Skills", 0.4);

    return (
        <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <Secheading>My Skills</Secheading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {
                    skillsData.map((skill, index) => (
                        <motion.li
                            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 flex items-center dark:bg-white/10 dark:text-white/80"
                            key={index}
                            variants={fadeIn}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            <Image
                                className="mr-2"
                                src={skill.logo}
                                alt={`${skill.name} logo`}
                                width={20}
                                height={20}
                            />
                            <span>{skill.name}</span>
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Skills;