import Link from "next/link";
const LinkOfHeader = ({href,title}:{href:string,title:string}) => {
    return (
         <>
              <Link
                   className="hover:text-slate-400 hover:skew-x-12 transition-all duration-500 hover:underline underline-offset-8 decoration-blue-300 decoration-1 hover:tracking-widest"
                   href={href}
                   prefetch
              >
                   {title}
              </Link>
         </>
    );
}
 
export default LinkOfHeader;