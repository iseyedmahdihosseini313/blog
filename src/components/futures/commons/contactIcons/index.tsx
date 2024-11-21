'use client';
import { EmailSvg, PhoneSvg } from '@/components';
import { useState } from 'react';

export function ContactIcons() {
     const icons = [
          { id: 'email', Icon: EmailSvg, content: 'iseyedmahdihosseini313@gmail.com' },
          { id: 'phone', Icon: PhoneSvg, content: '+98 938 541 2907' },
     ];

     const [activeIcon, setActiveIcon] = useState<string | null>(null);

     return (
          <div className="flex  justify-center gap-20 min-h-screen min-w-[100vw]">
               {icons.map((item) => (
                    <div key={item.id}>
                         <button
                              onClick={() => setActiveIcon(item.id)}
                              className="bg-white/10 p-4 rounded-full shadow-inner shadow-slate-300 cursor-pointer
                         hover:scale-110 transition-all duration-300"
                         >
                              <item.Icon />
                         </button>

                         {activeIcon === item.id && (
                              <div className="fixed left-1/2 top-[30%] -translate-x-1/2 bg-gray-900/35 p-5 rounded-sm shadow-lg shadow-slate-300 h-12 flex justify-center items-center select-text selection:text-fuchsia-900 selection:bg-cyan-300/25">
                                   <p className="text-2xl text-blue-200">
                                        {item.content}
                                   </p>
                              </div>
                         )}
                    </div>
               ))}
          </div>
     );
}
