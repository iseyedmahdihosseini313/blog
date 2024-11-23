'use client';
import React, { useState } from 'react';
const SkillIcon = ({
     skill,
}: {
     skill: { title: string; icon: React.JSX.Element };
}) => {
     const [activeIndex, setActiveIndex] = useState<string | null>(null);
     return (
          <div
               onClick={() => {
                    setActiveIndex(skill.title);
               }}
               className={`${
                    activeIndex === skill.title && ' bg-blue-200/15  scale-125 '
               }transition-all duration-500  rounded-full p-2 bg-blue-100/10 cursor-pointer flex justify-center items-center max-w-20 max-h-20`}
               key={skill.title}
          >
               {skill.icon}
          </div>
     );
};

export default SkillIcon;
