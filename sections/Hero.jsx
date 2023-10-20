'use client';

import { motion } from 'framer-motion';


import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn, navVariants, footerVariants, slideIn  } from '../utils/motion';




const Hero = () => (
  <section className={`${styles.paddings}`}>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
  >
    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex-[0.5] lg:max-w-[100px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
    >
      <div className="feedback-gradient" />
      <div className="mb-5 grid grid-cols-1 grid-rows-5 gap-10 place-items-center ">
      <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
       
    <div className="transition relative   bg-white/90  w-[47px] h-[47px] flex justify-center items-center mx-2 rounded-xl cursor-pointer " >
        <img src="Home.png" 
              width="30"
              height="30" 
              alt="pixi-world"
         />
    </div>
    </motion.div>

    <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
    <div className="row-start-2 transition relative  backdrop-blur bg-white/90    w-[47px] h-[47px] flex justify-center items-center mx-2 rounded-xl cursor-pointer">
    <img src="pushnotif.png" 
              width="24"
              height="30" 
              alt="pixi-world"
         />
    </div>
    </motion.div>
    
    <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
    <div className="row-start-3 transition relative  backdrop-blur bg-white/90    w-[47px] h-[47px] flex justify-center items-center mx-2 rounded-xl cursor-pointer">
    <div className="mr-1 mt-1">
    <img src="pushmessage.png" 
              width="28"
              height="28" 
              alt="pixi-world"
         />
    </div>
    </div>
    </motion.div>

    <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
    <div className="row-start-4 transition relative  backdrop-blur bg-white/90    w-[47px] h-[47px] flex justify-center items-center mx-2 rounded-xl cursor-pointer">
    <img src="pushvid1.png" 
              width="24"
              height="24" 
              alt="pixi-world"
         />
    </div>
    </motion.div>

    <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
    <div className="row-start-5 transition relative  backdrop-blur bg-white/90    w-[47px] h-[47px] flex justify-center items-center mx-2 rounded-xl cursor-pointer">
    <img src="Profile.png" 
              width="24"
              height="24" 
              alt="pixi-world"
         />
    </div>
    </motion.div>
</div>

      {/* <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        “With the development of today's technology, metaverse is very
        useful for today's work, or can be called web 3.0. by using
        metaverse you can use it as anything”
      </p> */}
    </motion.div>

    <div className="grid grid-cols-1 grid-rows-1 gap-4">

    <motion.div
      variants={slideIn }
      className="relative flex-1 flex justify-center items-center  lg:min-h-[370px]  lg:min-w-[900px] flex  flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
    >
      {/* <img
        src="/planet-09.png"
        alt="planet-09"
        className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
      /> */}
      <div className="feedback-gradient" />
      <div>
        
      </div>
    </motion.div>
    <motion.div
      variants={footerVariants }
      className="relative flex-1 flex row-start-2 justify-center items-center  lg:min-h-[100px]  lg:min-w-[900px] flex  flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
    >
      {/* <img
        src="/planet-09.png"
        alt="planet-09"
        className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
      /> */}
      <div className="feedback-gradient" />
      <div>
        <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
          Sam
        </h4>
        <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          Fou
        </p>
      </div>
    </motion.div>
    </div>

    <motion.div
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="flex-[0.5] lg:max-w-[300px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
    >
      <div className="feedback-gradient" />
      <div>
        <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
          Sam
        </h4>
        <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          Fou
        </p>
      </div>

      {/* <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        “With the development of today's technology, metaverse is very
        useful for today's work, or can be called web 3.0. by using
        metaverse you can use it as anything”
      </p> */}
    </motion.div>

  </motion.div>
</section>
);

export default Hero;
