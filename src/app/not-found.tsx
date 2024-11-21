import Link from "next/link";


const NotFound = () => {
      
    
    return (
         <div className="min-w-full min-h-full flex justify-center items-center pb-16">
              <div className="text-red-500/75   *:shadow-lg text-3xl *:p-3   w-full h-full sm:w-1/2 sm:h-[70%] bg-gradient-to-r from-red-500/30 via-black/10 to-red-500/30 shadow-lg shadow-blue-200/55 rounded-lg flex flex-col justify-center items-center gap-10">
                   <span >
                        4 0 4 ERROR
                   </span>

                   <span >
                        Page Not Found
                   </span>
                <Link className="bg-blue-400/35 ring-1 rounded-md text-white hover:text-white/55 h-[2.4rem] w-28 flex justify-center items-center font-sans text-md hover:tracking-widest  transition-all duration-700" href="/"><span>Home</span></Link>
              </div>
         </div>
    );
}
 
export default NotFound;