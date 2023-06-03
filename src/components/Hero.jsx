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
      <div className="sketchfab-embed-wrapper">
      <iframe 
          frameborder="0"
          allow="autoplay"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          width="1820" 
          height="780" 
          src="https://sketchfab.com/models/c370f7e06e3c4b55ac35cf48008c77ff/embed?autostart=1&preload=1&ui_hint=0"> 
          </iframe> 
        <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
          <a
            href="https://sketchfab.com/3d-models/book-cover-c370f7e06e3c4b55ac35cf48008c77ff?utm_medium=embed&utm_campaign=share-popup&utm_content=c370f7e06e3c4b55ac35cf48008c77ff"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#050816' }}
          >
            
          </a>{' '}
          {' '}
          <a
            href="https://sketchfab.com/natcrab?utm_medium=embed&utm_campaign=share-popup&utm_content=c370f7e06e3c4b55ac35cf48008c77ff"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#050816' }}
          >
            
          </a>{' '}
          on{' '}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=c370f7e06e3c4b55ac35cf48008c77ff"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#050816' }}
          >
            
          </a>
        </p>
      </div>

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

      <div
        className="absolute bottom-10 right-4 text-white bg-#1C0C27 p-4 rounded-lg"
        style={{ fontSize: '13px', fontWeight: 'normal' }}
      >
        <p>move cursor to the sides and click to load the 3D model </p>
        <p>click and drag to pan and scroll to zoom in and out</p>
      </div>
    </section>
  );
};

export default Hero;
