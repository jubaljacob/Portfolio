import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      

       <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row  items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <motion.h1
            className={`${styles.heroHeadText} text-white`}
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className="text-[#EC2647]">Jubal</span>
          </motion.h1>
          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            I am interested in Machine Learning,
          </motion.p>
          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Ai and 3D visuals
          </motion.p>
        </div>
      </div>
 

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[28px] h-[40px] rounded-3xl border-4 border-white flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-1 h-2 rounded-full bg-white mb-1"
            />
            <p className=' absolute bottom-20' >
            {/* scroll */}
            </p>
          </div>
        </a>
      </div>

      
    </section>
  );
};

export default Hero;
