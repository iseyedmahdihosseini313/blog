'use client';
import React, { createContext, useEffect } from 'react';
import {
     IContextReturnType,
     IMainContextProps,
     IMainContextState,
} from '@/types/mainContext.types';

export const Context = createContext<IContextReturnType>(
     {} as IContextReturnType
);

const MainContext = (props: IMainContextProps) => {
     const { children } = props;
     const [state, setState] = React.useState<IMainContextState>({
          user: undefined,
          theme: 'dark',
     });
     useEffect(() => {
          if (localStorage.getItem("theme") === 'dark') {
               document.documentElement.classList.add('dark');
               setState({...state,theme:"dark"})
          } else {
               document.documentElement.classList.remove('dark');
          }
     }, []);
     const toggleTheme = () => {
          if (document.documentElement.classList.contains('dark')) {
               document.documentElement.classList.remove('dark');
               localStorage.setItem('theme', 'light');
          } else {
               document.documentElement.classList.add('dark');
               localStorage.setItem('theme', 'dark');
          }  };

     return (
          <Context.Provider
               value={{
                    ...state,

                    toggleTheme,
               }}
          >
               {children}
          </Context.Provider>
     );
};

export default MainContext;
