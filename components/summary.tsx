"use client";

import Image from 'next/image';
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useContextSection } from '@/context/activeSection';

const Summary = () => {

  const { ref } = useSectionInView("Home", 0.5);
  const {
    setActiveSection,
    setToggleTime,
  } = useContextSection();

  return (

    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image src="/Picture1.jpg" alt="Profile"
              width={110}
              height={110}
              quality={100}
              priority={true}
              className="h-24.2 w-24.2 rounded-full object-cover border-[0.35rem] border-blue-300 dark:border-gray-300 shadow-xl"
            />
          </motion.div>

          <motion.span className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.8,
            }}
          >👋</motion.span>
        </div>
      </div>

      <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Pradipto.</span> I'm a B.Tech student specializing in {" "}
        <span className="font-bold">full-stack developer</span> in LPU {" "}
        <span className="font-bold">3rd year</span>. I enjoy
        building <span className="italic">websites & apps</span> with various {" "}
        <span className="underline">Web Technologies</span>.
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >

        <Link href="#contact" className="group bg-indigo-950 dark:bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
          Contact me here{" "}<BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" 
          onClick={() => {
            setActiveSection("Contact");
            setToggleTime(Date.now());
          }}
        />
        </Link>

        <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-50 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10" href="/Cv-lpu.pdf" download>
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a className="bg-white px-7 p-4 text-indigo-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:bg-slate-50 active:scale-115 transition cursor-pointer border hover:text-slate-950 borderBlack dark:bg-white/10 dark:text-white/70" href="https://www.linkedin.com/in/pradipto-dutta2024" target="_blank">
          <BsLinkedin />
        </a>

        <a className="bg-white px-7 p-4 text-indigo-950 flex items-center gap-2 rounded-full text-[1.20rem] focus:scale-[1.15] hover:scale-[1.15] hover:bg-slate-50 hover:text-slate-950 active:scale-115 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/70" href="https://github.com/Pradipta7171" target="_blank">
          <FaGithubSquare />
        </a>

      </motion.div>
    </section>
  )
}

export default Summary;