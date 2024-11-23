import pic1 from '../../../public/images/pic1.jpg';
import IContainer from './type';
export const Container = ({ children, className = '' }: IContainer) => {
     return (
          <div
               className={`w-screen h-screen flex flex-col gap-3 overflow-hidden select-none ${className} text-slate-100 dark:text-purple-500 font-extralight tracking-wider `}
               style={{
                    backgroundImage: `url(${pic1.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
               }}
          >
               {children}
          </div>
     );
};
