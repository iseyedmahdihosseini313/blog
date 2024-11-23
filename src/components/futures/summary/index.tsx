import './summary.css';
const Summary = () => {
     const summaryText: string = ` I am a front-end web developer with a passion for creating
                    clean and efficient code, user experience, and responsive
                    design. I value continuous learning alongside a team where I
                    can contribute my skills and knowledge, and grow with
                    creativity and innovation.`;
     return (
          <div className="relative flex justify-center bg-gradient-to-tr from-transparent from-50% to-blue-900  shadow-2xl md:p-5 w-1/2 md:min-w-[50%] md:w-[60%] min-h-64 md:min-h-96 lg:min-h-96 lg:w-[50%] rounded-lg rounded-tr-none">
               <div className='absolute -top-[1rem] -right-[3.45rem]  transform translate-x-1/2 -translate-y-1/2 w-28 h-10 rounded-md rounded-bl-none bg-gradient-to-bl from-transparent to-blue-900 before:content-[""] before:w-1/2 before:h-1/2  before:absolute before:right-[3.5rem] before:top-[2.4rem]  before:rounded-full after:content-[""] after:w-1/2 after:h-1/2 after:bg-red-0 after:absolute after:-left-[3.4rem] after:bottom-[0.22rem] after:rounded-full text-green-100  flex justify-center items-center beforeShadow afterShadow'>
                    SUMMARY
               </div>
               <p className="md:p-12 p-5">{summaryText}</p>
          </div>
     );
};

export default Summary;
