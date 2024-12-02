import React, { useState } from 'react';import AnimatedTitle from './animatedTitle'

const WhoWeAre = () => {
    const [activeVideo, setActiveVideo] = useState(null);
  
    const handleHover = (videoSrc) => {
      setActiveVideo(videoSrc);
    };
  
    const handleMouseLeave = () => {
      setActiveVideo(null);
    };
  return (
    <div className='w-screen bg-[#DFDFF2] text-black'>
      <div
      className='relative pb-8 pt-36 flex flex-col items-center gap-5'>
        <h2
        className='font-general text-sm uppercase md:text-[10px]'>
            Welcome to Zentry
        </h2>
            <AnimatedTitle
            title="We're B<b>U</b>ilding <br/>  a new realit<b>y</b> <br/>  that rew<b>a</b>rds <br/> play<b>e</b>rs and <br/>  e<b>n</b>courages <br/> co<b>mm</b>unities <br/>  to thrive"
            containerClass='mt-5 text-center !text-black text-4xl md:text-[6rem] leading-[1]'
           />

            <div 
            className='about-subtext'>
             
            </div>
      </div>
    </div>
  )
}

export default WhoWeAre
