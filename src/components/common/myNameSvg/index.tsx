'use client';
import * as React from 'react';
const MyNameSvgIcon = () => {
     const [move, setMove] = React.useState(false);
     React.useEffect(() => {
          console.log("render mynamesvgicon")
          const s = setTimeout(() => {
               setMove((prev) => !prev);
          }, 1000);

          return () => {
               clearTimeout(s);
          };
     }, []);

     return (
          <svg
               className={`${
                    move && 'translate-y-16 scale-150 '
               } transition-all duration-1000 w-80 `}
               xmlns="http://www.w3.org/2000/svg"
               xmlSpace="preserve"
               viewBox="0 0 640 480"
          >
               <text
                    xmlSpace="preserve"
                    fontFamily="'Open Sans', sans-serif"
                    fontSize="18"
                    style={{ whiteSpace: 'pre' }}
                    transform="translate(305 176.88)"
               >
                    <tspan
                         className=""
                         x="-270"
                         y="16.34"
                         fill="#d1f2f0"
                         fontFamily="'Indie Flower', cursive"
                         fontSize="52"
                         style={{ whiteSpace: 'pre' }}
                    >
                         
                         I &apos; m Mahdi H 0sSei n i
                    </tspan>
               </text>
          </svg>
     );
};

export default MyNameSvgIcon;
