import React, { useRef, useState } from 'react'
import Btn from './Btn';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const [currentIndex,setCurrentIndex] = useState(1);
    const [hasClicked , setHasClicked] = useState(false);
    const [isLoading , setIsLoading] = useState(true);
    const [loadedVideos , setLoadedVideos] = useState(0);

    const totalVideo = 4;

    const nextVideRef = useRef(null)
    const getVideoSrc = (index) => {
       return `videos/hero-${index}.mp4`
    }
    

    const handleVideoLoad = () => {
        setLoadedVideos( (prev)=> prev + 1)
    } 

    const setUpcomingVideoIndex = (currentIndex % totalVideo) + 1

    const handleMiniVideoClick = () => {
        setHasClicked(true);
        setCurrentIndex(setUpcomingVideoIndex);
    }

    useGSAP(()=>{
      if(hasClicked){
        gsap.set('#nextVideo', {visibility: 'visible'});

        gsap.to('#nextVideo',{
          transformOrigin: 'center center',
          scale: 1,
          width: '100%',
          height: '100%',
          duration: 1,
          ease: 'power1.inOut',
          onStart: ()=>{
            nextVideRef.current.play()
          }
        });

        gsap.from('#current-video',{
          transformOrigin: 'center center',
          scale: 0,
          duration: 1.5,
          ease: 'power1.inOut'
        })

       
      }
    }, {dependencies: [currentIndex],revertOnUpdate: true})

    useGSAP(() => {
      gsap.set("#videoFrame", {
        clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
        borderRadius: " 0 60% 60%",
      });
    
      gsap.from("#videoFrame", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: "0 0 0 0",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#videoFrame",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      });
    });
    

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>

      
      <div id='videoFrame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
        <div>
          {/* clickable video part  */}
            <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                <div onClick={handleMiniVideoClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                    <video src={getVideoSrc(currentIndex + 1)} 
                    loop 
                    muted 
                    id='current-video' 
                    className='size-64 origin-center scale-150 object-cover object-center' 
                    ref={nextVideRef} 
                    onLoadedData={handleVideoLoad}></video>
                </div>
            </div>
        {/* background video part  */}
        <video 
        src={getVideoSrc(currentIndex)}
        ref={nextVideRef}
        loop
        muted
        id='nextVideo'
        className='absolute-center invisible absolute z-20 size-64 object-center object-cover'
        ></video>

        <video src={getVideoSrc(currentIndex === totalVideo - 1? 1:currentIndex)}
        autoPlay
        loop
        muted
        onLoadedData={handleVideoLoad}
        className='absolute left-0 top-0 size-full object-cover object-center'
        >

        </video>


        </div>
        <h1
        className=' special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'
        >G<b>A</b>MING</h1>

        <div
        className='absolute left-0 top-0 z-40 size-full'
        >
          <div className='mt-24 px-5 sm:px-10'>
            <h1
            className='special-font hero-heading text-blue-100'
            >REDEFI<b>N</b>E</h1>

            <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>
              Enter the Metagame Layer <br /> Unleash The Play Economy
            </p>
            </div> 
            <Btn
            id='watchTrailer'
            title="Watch Trailer"
            leftIcon={TiLocationArrow}
            containerClass = "!bg-yellow-300 flex-center gap-1 !px-5 ml-10"
            />
        </div>
      </div>
      <h1
        className=' special-font hero-heading absolute bottom-5 right-5 text-black'
        >G<b>A</b>MING</h1>
    </div>

  )
}

export default Hero
