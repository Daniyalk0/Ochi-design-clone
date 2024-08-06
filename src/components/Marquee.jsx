import { motion} from 'framer-motion'
import React from 'react'

function Marquee() {

    return (
        <div className='w-full tablet:mt-[20vw] py-20  bg-[hsl(172,100%,15%)] rounded-t-3xl' data-scroll data-scroll-speed='.2' data-scroll-section>
            <div className="text border-t-[0.1vw] border-b-[0.1vw] border-[#c1c1c151] flex whitespace-nowrap items-center overflow-hidden ">
                <motion.h1 initial={{x:"0"}} animate={{x: '-100%'}} 
                transition={{repeat:Infinity, duration:8, ease:"linear"}}
                className='text-[22vw] leading-none font-new font-bold uppercase  -mb-[1vw] -mt-[2vw] pr-10'>we are ochi</motion.h1>

                <motion.h1 initial={{x:"0"}} animate={{x: '-100%'}} 
                transition={{repeat:Infinity, duration:8, ease:"linear"}} 
                className='text-[22vw] leading-none font-new  font-bold uppercase  -mb-[1vw] -mt-[2vw] pr-10'>we are ochi</motion.h1>
            </div>
        </div>
    );
    
}

export default Marquee