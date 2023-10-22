'use client';

import { motion } from 'framer-motion';
import Link from "next/link";


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
    <Link href="/Chat">
    <img src="pushmessage.png" 
              width="28"
              height="28" 
              alt="pixi-world"
         />
    </Link>
    </div>
    </div>
    </motion.div>

    <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
    <div className="row-start-4 transition relative  backdrop-blur bg-white/90    w-[47px] h-[47px] flex justify-center items-center mx-2 rounded-xl cursor-pointer">
    <Link href="/Upload">
    <img src="pushvid1.png" 

              width="24"
              height="24" 
              alt="pixi-world"
         />
      </Link>
    </div>
    </motion.div>

    <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
    <div className="row-start-5 transition relative  backdrop-blur bg-white/90    w-[47px] h-[47px] flex justify-center items-center mx-2 rounded-xl cursor-pointer">
    <Link href="/Spaces"> 
    <img src="Profile.png" 
              width="24"
              height="24" 
              alt="pixi-world"
         />
         </Link>
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
        
      {/* <div className="max-w-xl text-black ">
                  <h1 className="font-jostBold text-[58px] leading-[50px] sm:text-7xl">
                    Marketing is The Key of Business Sucess.
                  </h1>
                  <p className="font-jostRegular text-xl py-10 text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been{' '}
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button className="bg-[#3E3FD8] mr-4 flex text-white font-jostMedium w-[170px] h-[60px] rounded-3xl text-xl items-center justify-center">
                      Get Started{' '}
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        className="mx-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="23" height="23" rx="5" fill="#EEF4FF" />
                        <path
                          d="M16.3536 12.3536C16.5488 12.1583 16.5488 11.8417 16.3536 11.6464L13.1716 8.46447C12.9763 8.2692 12.6597 8.2692 12.4645 8.46447C12.2692 8.65973 12.2692 8.97631 12.4645 9.17157L15.2929 12L12.4645 14.8284C12.2692 15.0237 12.2692 15.3403 12.4645 15.5355C12.6597 15.7308 12.9763 15.7308 13.1716 15.5355L16.3536 12.3536ZM7 12.5L16 12.5L16 11.5L7 11.5L7 12.5Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                    <button className="flex text-[#61646B] my-1 sm:my-0 items-center font-jostMedium text-xl">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        className="mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="24" cy="24" r="20" fill="#3E3FD8" />
                        <circle cx="24" cy="24" r="20.95" stroke="#3E3FD8" strokeWidth="0.1" />
                        <circle cx="24" cy="24" r="22.95" stroke="#3E3FD8" strokeWidth="0.1" />
                        <circle cx="24" cy="24" r="21.95" stroke="#3E3FD8" strokeWidth="0.1" />
                        <circle cx="24" cy="24" r="23.95" stroke="#3E3FD8" strokeWidth="0.1" />
                        <path
                          d="M31 22.2679C32.3333 23.0377 32.3333 24.9623 31 25.7321L22 30.9282C20.6667 31.698 19 30.7358 19 29.1962L19 18.8038C19 17.2642 20.6667 16.302 22 17.0718L31 22.2679Z"
                          fill="#EEF4FF"
                        />
                      </svg>
                      Watch Our Video
                    </button>
                  </div>
                </div> */}
    <div className="absolute bottom-0 left-0">
    
    <div className="ml-8 mb-10 max-w-xl text-black ">
                  <h1 className="font-bold sm:text-[30px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
                    A Modding Community
                  </h1>
                  <p className="font-jostRegular max-w-sm  text-xl py-5 text-white">
                  Share your wildest ideas, transform games, and take them beyond their limits. Unpack files, tinker with code & create mods that redefine the gaming experience.{' '}
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button className="bg-[#3E3FD8] mr-4 flex text-white font-jostMedium w-[170px] h-[60px] rounded-3xl text-xl items-center justify-center">
                      Get Started{' '}
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        className="mx-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="23" height="23" rx="5" fill="#EEF4FF" />
                        <path
                          d="M16.3536 12.3536C16.5488 12.1583 16.5488 11.8417 16.3536 11.6464L13.1716 8.46447C12.9763 8.2692 12.6597 8.2692 12.4645 8.46447C12.2692 8.65973 12.2692 8.97631 12.4645 9.17157L15.2929 12L12.4645 14.8284C12.2692 15.0237 12.2692 15.3403 12.4645 15.5355C12.6597 15.7308 12.9763 15.7308 13.1716 15.5355L16.3536 12.3536ZM7 12.5L16 12.5L16 11.5L7 11.5L7 12.5Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                    <button className="flex text-[#61646B] my-1 sm:my-0 items-center font-jostMedium text-xl">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        className="mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="24" cy="24" r="20" fill="#3E3FD8" />
                        <circle cx="24" cy="24" r="20.95" stroke="#3E3FD8" strokeWidth="0.1" />
                        <circle cx="24" cy="24" r="22.95" stroke="#3E3FD8" strokeWidth="0.1" />
                        <circle cx="24" cy="24" r="21.95" stroke="#3E3FD8" strokeWidth="0.1" />
                        <circle cx="24" cy="24" r="23.95" stroke="#3E3FD8" strokeWidth="0.1" />
                        <path
                          d="M31 22.2679C32.3333 23.0377 32.3333 24.9623 31 25.7321L22 30.9282C20.6667 31.698 19 30.7358 19 29.1962L19 18.8038C19 17.2642 20.6667 16.302 22 17.0718L31 22.2679Z"
                          fill="#EEF4FF"
                        />
                      </svg>
                      Watch Our Video
                    </button>
                  </div>
                </div>

    </div>
    <div className="static absolute bottom-0 right-0"><img src="Hero.png" 
              width="470"
              height="470" 
              alt="Hero"
         />
    </div>

    
      </div>
    </motion.div>
    <motion.div
      variants={footerVariants }
      className="relative flex-1 flex row-start-2 justify-center items-center  lg:min-h-[100px]  lg:min-w-[900px] flex  flex-col gradient-05 sm:p-6 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
    >
      {/* <img
        src="/planet-09.png"
        alt="planet-09"
        className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
      /> */}
      <div className="feedback-gradient" />
      <div>
        
<div className="mt- grid grid-cols-5 grid-rows-1 gap-6">
    <div className="transition relative  backdrop-blur bg-white/90    w-[120px] h-[95px] flex justify-center items-center mx-5 rounded-xl cursor-pointer" >1</div>
    <div className="transition relative  backdrop-blur bg-white/90    w-[120px] h-[95px] flex justify-center items-center mx-2 rounded-xl cursor-pointer">2</div>
    <div className="transition relative  backdrop-blur bg-white/90    w-[120px] h-[95px] flex justify-center items-center mx-2 rounded-xl cursor-pointer">3</div>
    <div className="transition relative  backdrop-blur bg-white/90    w-[120px] h-[95px] flex justify-center items-center mx-2 rounded-xl cursor-pointer">4</div>
    <div className="transition relative  backdrop-blur bg-white/90    w-[120px] h-[95px] flex justify-center items-center mx-2 rounded-xl cursor-pointer">5</div>
</div>
    
      </div>
    </motion.div>
    </div>

    <motion.div
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="flex-[0.5] lg:max-w-[400px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
    >
      <div className="feedback-gradient" />
      
<div className="mb-40  place-items-center grid grid-cols-1 grid-rows-4 gap-7">
    <div className="transition relative  backdrop-blur bg-white/90    w-[120px] h-[50px] flex justify-center items-center mx-2 rounded-xl cursor-pointer">2</div>
    <div className="transition relative  backdrop-blur bg-white/90     w-[120px] h-[50px] flex justify-center items-center mx-2 rounded-xl cursor-pointer">3</div>
    <div className="transition relative  backdrop-blur bg-white/90     w-[120px] h-[50px] flex justify-center items-center mx-2 rounded-xl cursor-pointer">4</div>
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
