import React from 'react';

const CircularLogo = ({ size = 100, className = '' }) => {
  return (
    <div className={`inline-block ${className} p-1 bg-[#497C55] rounded-full `} style={{ width: size, height: size }}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 120 120" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background circle */}
        <circle cx="60" cy="60" r="60" fill="#497C55"/>
        
        {/* Rotating text path */}
        <path 
          id="textPath" 
          d="M60,60 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
          fill="none"
          stroke="none"
        />
        
        {/* Rotating text */}
        <text fill="#22A97E`" fontSize="16" className='font-medium ' >
          <textPath href="#textPath" startOffset="0%">
            Request - Callback - • - Connect us - • -
          </textPath>
        </text>

        {/* Center icon (triangle) */}
       
      </svg>
    </div>
  );
};

export default CircularLogo;

// Usage example:
// <CircularLogo size={120} className="hover:opacity-90" />