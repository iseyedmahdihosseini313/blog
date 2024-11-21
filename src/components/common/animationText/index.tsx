"use client"
import { useState, useEffect } from 'react';

const TypeWriter = ({ text }: { text: string }) => {
     const [displayText, setDisplayText] = useState('');
     const [currentIndex, setCurrentIndex] = useState(0);

     useEffect(() => {
          if (currentIndex < text.length) {
               const timeout = setTimeout(() => {
                    setDisplayText((prev) => prev + text[currentIndex]);
                    setCurrentIndex((prev) => prev + 1);
               }, 30); // سرعت تایپ - میتونید تغییر بدید

               return () => clearTimeout(timeout);
          }
     }, [currentIndex, text]);

     return (
          <div className="w-full h-[50%]  md:w-[60%] lg:w-[40%]   rounded-lg bg-slate-700/25 shadow-inner shadow-slate-200/55 p-5  md:h-96 overflow-auto mb-16 scrollbar-thin scrollbar-thumb-blue-200/80 scrollbar-track-slate-200/5 scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-blue-200/5 ">
               
               {displayText}
               <span className="animate-pulse text-blue-400">|</span>
          </div>
     );
};

export default TypeWriter;
