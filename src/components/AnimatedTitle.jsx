import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          end: 'center center',
          toggleActions: 'play none none reverse',
        },
      });

      titleAnimation.to('.animated-word', {
        opacity: 1,
        transform: 'translateY(0)',
        ease: 'power2.out',
        stagger: 0.05,
        duration: 0.6,
      });
    }, containerRef);

    return () => ctx.revert(); // Clean up GSAP context
  }, []);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split(/<br\s*\/?>/).map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-5 md:gap-3 relative z-20" // Ensure text stays on top
        >
          {line.split(' ').map((word, i) => (
            <span
              key={i}
              className="animated-word opacity-0 transform translate-y-5"
              dangerouslySetInnerHTML={{ __html: word }}
            ></span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
