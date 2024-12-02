import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import AnimatedTitle from './animatedTitle';

gsap.registerPlugin(ScrollTrigger)


const About = () => {
    useGSAP(()=>{
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: '#clip',
            start: 'center center',
            end: '+=800 center',
            scrub: 0.5,
            pin: true,
            pinSpacing: true
        }
      })

      clipAnimation.to('.mask-clip-path',{
        width: '100vw',
        height: '100vh',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'power2.out', 
        duration: 1.5,      
         borderRadius: 0
      })
    })


  return (
    <div id='about' className='min-h-screen w-screen'>
      <div
      className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
        <h2
        className='font-general text-sm uppercase md:text-[10px]'>
            Welcome to Zentry
        </h2>
            <AnimatedTitle
            title="Disc<b>o</b>ver the world's <br /> l<b>A</b>rgest shared Adventure"
            containerClass='mt-5 text-center !text-black text-4xl md:text-[6rem] leading-[1]'
           / >

            
            

            <div 
            className='about-subtext'>
                <p>The Game of Games Begins - your life, now an EPIC MMORPG</p>
                <p>Zentry Unites every player from countless games and platforms</p>
            </div>
      </div>
      <div
      className='h-dvh w-screen' id='clip'>
        <div className='mask-clip-path about-image'
        style={{
          clipPath: "polygon(28% 0, 80% 0%, 100% 75%, 0% 100%)",
        }}>
            <img src="img/about.webp" alt="background" className='absolute left-0 top-0 size-full object-cover' />
        </div>

      </div>
    </div>
  )
}

export default About
