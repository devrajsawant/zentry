import React, { useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

const BentoTilt = ({ children, className= ''}) => {
  const [transStyle , setTransStyle] = useState('')
  const itemRef = useRef();
  const HandleMouseMove = (e) => {
    if(!itemRef.current) return;
    const {left , top , width , height } = itemRef.current.getBoundingClientRect()
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5)* 15;
    const tiltY = (relativeX - 0.5)* -15;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`
    setTransStyle(newTransform);
  }
  const HandleMouseLeave = (e) => {
    setTransStyle('')
  }

  return(
    <div className={className} ref={itemRef} onMouseMove={HandleMouseMove} onMouseLeave={HandleMouseLeave} style={{transform: transStyle}}>
      {children}
    </div>
  )
}

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
        {description && (
          <p className="mt-3 max-w-64 text-xs md:text-base">
            {description}
          </p>
        )}
        </div>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into The Metagame Layer
          </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          nesciunt quod, impedit corporis dignissimos ipsum nisi eum alias
          praesentium non veritatis reprehenderit officiis voluptas totam
          pariatur sequi quia enim eius saepe eveniet. Veniam, dolorum
          laboriosam.
        </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description="a cross platform metagame app, turning your activities across web3 and web2 games into a rewarding adventure"
          />
        </BentoTilt>

        {/* Updated Layout */}
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-title_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  Zig<b>M</b>a
                </>
              }
              description="description"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  N<b>E</b>XUS
                </>
              }
              description="desc"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  AZ<b>U</b>L
                </>
              }
              description="desc"
            />
          </BentoTilt>

          <div
          className='bento-tilt_2 '> 
            <div 
            className='flex size-full flex-col justify-between bg-violet-300 p-5'>
                <h1
                className='bento-title special-font max-w-64 text-black'>M<b>O</b>Re C<b>o</b>ming S<b>o</b>on</h1>
                <TiLocationArrow className='m-5 scale-[5] self-end' />
            </div>


          </div>
          <div
          className='bento-tilt_2'
          >
            <video src="videos/feature-5.mp4" loop muted autoPlay className='size-full object-cover object-center' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;