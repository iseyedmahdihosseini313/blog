'use client';
import { Summary } from '@/components';
import SkillIcon from '@/components/futures/commons/SkillIcon';
import mySkills from '@/lib/mySkillsData';
import {  useState } from 'react';

const Page = () => {
     const [activeIndex, setActiveIndex] = useState<string | null>(null);
  

     return (
          <div className="min-w-screen min-h-full flex  justify-center items-center ">
               <div className="min-h-screen md:h-72 fixed left-0 top-[18%]  bg-slate-700/25 shadow-inner shadow-slate-200/55 flex flex-col gap-1 md:gap-5 p-3 md:py-10 rounded-full">
                    {mySkills.map((skill) => {
                         return (
                              <SkillIcon
                                   key={skill.title}
                                   activeIndex={activeIndex}
                                   setActiveIndex={setActiveIndex}
                                   skill={skill}
                              />
                         );
                    })}
               </div>

            <Summary/>
          </div>
     );
};

export default Page;
