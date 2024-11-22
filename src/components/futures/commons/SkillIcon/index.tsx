import React from "react";

const SkillIcon = ({
     setActiveIndex,
     activeIndex,
     skill,
}: {
     skill: { title: string,icon:React.JSX.Element };
     activeIndex: null | string;
     setActiveIndex:(title:string)=>void
}) => {
     return (
          <div
               onClick={() => {
                    setActiveIndex(skill.title);
               }}
               className={`${
                    activeIndex===skill.title && ' bg-blue-200/15  scale-125 '
               }transition-all duration-500  rounded-full p-2 bg-blue-100/10 cursor-pointer flex justify-center items-center max-w-20 max-h-20`}
               key={skill.title}
          >
            {skill.icon}
          </div>
     );
};

export default SkillIcon;
