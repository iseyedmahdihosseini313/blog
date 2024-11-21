import { TypeWriter } from '@/components';

export default function Page() {
     const text = `I am a self-taught front-end developer. My key strengths include a quick learning ability, responsibility, and adaptability. These qualities enable me to grow rapidly and align myself with the diverse needs of projects and team members.
In addition to my technical skills, I value effective communication and organization in teamwork. I am seeking an opportunity to collaborate with a professional team and leverage creativity to create an exceptional user experience.
My goal is to work in a dynamic and creative environment where I can continue to grow and develop professionally. I also aim to contribute to the team’s success in achieving its goals and successfully completing projects.
`;
     return (
          <div className="min-h-screen min-x-full flex flex-col items-center justify-center gap-10">
               <span className="text-4xl text-yellow-400 p-2"> ABOUT ME</span>
               <TypeWriter text={text} />
          </div>
     );
}
