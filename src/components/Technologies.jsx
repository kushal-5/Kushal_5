import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
// import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si"; // Importing Tailwind CSS icon
import { SiJavascript } from "react-icons/si"; // Importing JavaScript icon
import { SiBootstrap } from "react-icons/si"; // Importing Bootstrap icon
import { FaHtml5 } from "react-icons/fa"; // Importing HTML icon
import { motion } from "framer-motion";

const icoonVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, y:-100}}
       transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div  
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0, x:-100}}
       transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={icoonVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={icoonVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        
        <motion.div
          variants={icoonVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNode className="text-7xl text-green-500" />
        </motion.div>
        
        
        <motion.div
          variants={icoonVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={icoonVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={icoonVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiBootstrap className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div
          variants={icoonVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
