
import {LinkOfHeader} from "../../../components"
const Header = () => {
     const items: { title: string; href: string }[] = [
          { title: 'Home', href: '/' },
          { title: 'About Me', href: '/aboutme' },
          { title: 'Contact', href: '/contact' },
     ];
     return (
          <div className="w-full flex justify-center items-center p-8 gap-20 h-[5%] text-2xl shadow-2xl shadow-blue-100/40  ">
               {items.map((item) => {
                    return (
                        <LinkOfHeader key={item.title} href={item.href} title={item.title}/>
                    );
               })}
          </div>
     );
};

export default Header;
