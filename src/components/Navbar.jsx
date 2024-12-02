import React, { useEffect, useRef, useState } from 'react'
import { SlArrowRight } from "react-icons/sl";
import { useWindowScroll } from 'react-use';
const Navitems = ['Nexus' ,  'vault' , 'prologue' , 'about' , 'contact']
import gsap from 'gsap';
import Btn from './Btn';


const Navbar = () => {
    const navContainerRef = useRef(null);

    const audioElement = useRef(null);

    const [isAudioPlaying , setIsAudioPlaying] = useState(false);

    const [isIndicatorActive , setIsIndicatorActive] = useState(false);

    const toggleAudio = () => {
        setIsAudioPlaying((prev)=> !prev)
        setIsIndicatorActive((prev)=>!prev)
    }

    const [lastScrollY , setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true)

    useEffect(()=>{
        if(isAudioPlaying){audioElement.current.play();}
        else{audioElement.current.pause();}
    })

    const { y : currentScrollY } = useWindowScroll()

    useEffect(()=>{
        if(currentScrollY === 0){
            setIsNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav')
        }
        else if(currentScrollY > lastScrollY)
        {
           setIsNavVisible(false);
           navContainerRef.current.classList.add('floating-nav')
        }
        else if(currentScrollY < lastScrollY)
            {
               setIsNavVisible(true);
               navContainerRef.current.classList.add('floating-nav')
            }

    
            setLastScrollY(currentScrollY)
    }, [currentScrollY , lastScrollY])

    useEffect(()=>{
        gsap.to(navContainerRef.current,{
            y: isNavVisible? 0 : -100,
            opacity: isNavVisible? 1 : 0,
            duration: 0.2
        })
    }, [isNavVisible])

  return ( 
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
      <header 
      className='absolute top-1/2 w-full -translate-y-1/2'>
            <nav
            className='flex size-full items-center justify-between p-4'>
                <div className='flex items-center gap-7 '>
                    <img src="/img/logo.png" alt="logo" className='w-10' />
                    <Btn 
                    id='product-button'
                    title='products'
                    rightIcon = {<SlArrowRight/>}
                    containerClass="bg-blue-50 md:flex px-5 items-center justify-center "
                    />
                </div>
                {/* right side navigation  */}
                <div
                className='flex h-full items-center'>
                    <div
                    className='hidden md:block'>
                        {Navitems.map((i)=>(
                            <a key={i} href={`#${i.toLowerCase()}`} className='nav-hover-btn'>
                                {i}
                            </a>
                        )

                        )}
                    </div>

                    <button className='ml-10 flex items-center space-x-0.5' onClick={toggleAudio}>
                        <audio src="/audio/loop.mp3" ref={audioElement} className='hidden'></audio>
                        {[1,2,3,4].map((bar)=>(
                            <div
                            key={bar} className={`indicator-line ${isIndicatorActive? 'active': "}"}`} 
                            style={{animationDelay: `${bar * 0.1}s`}} />

                            
                        ))}
                    </button>
                </div>
            </nav>
      </header>
    </div>
  )
}

export default Navbar
