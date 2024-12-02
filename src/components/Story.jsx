import React, { useEffect, useRef } from 'react'
import AnimatedTitle from './animatedTitle'
import Btn from './Btn';
import { gsap } from "gsap"
import { TiLocationArrow } from 'react-icons/ti';

const Story = () => {

  const frameRef = useRef(null);
  const handleMouseEvent = () => {
    const element = frameRef.current

    gsap.to(element,{
      duration: 0.3,
      rotateX : 0, rotateY: 0,
      ease: 'power1.inOut'
    })


  }

  
  

  const handleMouseMove = (e) => {
    const {clientX , clientY} = e;
    const element = frameRef.current;
    if(!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX -rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y-centerY) / centerY) * -10;
    const rotateY = ((x-centerX) / centerX) * 10;

    gsap.to(element,{
      duration: 0.3,
      rotateX , rotateY,
      transformPerspective: 500,
      ease: 'power1.inOut'
    })
  }

  
  return (
    <div id='story2' className='min-h-dvh w-screen bg-black text-blue-50'>
      <div className='flex size-full flex-col items-center py-10 pb-24'>
        <p className='font-general text-sm uppercase md:text-[10px]'>the Multiversal IP world</p>

        <div className='relative size-full'>
          <AnimatedTitle 
          title=" the st<b>o</b>ry of <br/> a Hidden Real<b>m</b>"
          sectionId='#story'
          containerClass='mt-5 pointer-events-none mix-blend-difference relative z-10'
          />
          <div className='story-img-container'>
            <div className='story-img-mask'>
              <div className='story-img-content'>
                  <img src="/img/entrance.webp" alt="entrance" className='object-contain' ref={frameRef} 
                  onMouseEnter={handleMouseEvent}
                  onMouseLeave={handleMouseEvent}
                  onMouseUp={handleMouseEvent}
                  onMouseMove={handleMouseMove}
                  />
              </div>
            </div>
          </div>
        </div>
            <div className='-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end '>
                <div className='flex h-full w-fit flex-col items-center md:item-start'>
                    <p
                    className='mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, modi, maiores libero quibusdam eligendi reprehenderit, laborum inventore consequatur
                     eius eaque facilis. Neque eius iure et expedita culpa repudiandae dolor facilis ipsa sapiente!</p>

                     <Btn 
                    id='realm-button'
                    title='Disover Realm'
                    rightIcon = {<TiLocationArrow/>}
                    containerClass="bg-blue-50 md:flex px-5 items-center justify-center "

                    />

                     
                </div>
            </div>

      </div>
    </div>
  )
}

export default Story
