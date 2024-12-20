import items from '@/lib/linksOfHeaderInfo';
import { LinkOfHeader } from '../../../components';
const Header = () => {
     return (
          <div className="w-full flex justify-center items-center p-8 md:gap-20  gap-3 h-[5%] md:text-2xl text-md shadow-2xl shadow-blue-100/40  ">
               {items.map((item) => {
                    return (
                         <LinkOfHeader
                              key={item.title}
                              href={item.href}
                              title={item.title}
                         />
                    );
               })}
          </div>
     );
};

export default Header;
