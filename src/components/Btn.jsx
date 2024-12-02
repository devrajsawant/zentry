import React from 'react'

const Btn = ({title , id , rightIcon , leftIcon ,containerClass}) => {
  return (
  <button
  className={`group relative z-10 w-fit cursor-pointer rounded-full overflow-hidden bg-voilet-50 py-3 text-black ${containerClass}`}
  >
    {leftIcon}
    
    <span 
    className='relative inline-flex overflow-hidden  font-general text-xs uppercase text-black'
    >
      <div className='mr-5'>{title}</div>
      {rightIcon}
    </span>
  </button>

  )
}

export default Btn
