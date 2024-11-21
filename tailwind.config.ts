import type { Config } from 'tailwindcss';
import scrollbar from 'tailwind-scrollbar';

export default {
     darkMode: 'class',
     content: [
          './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
          './src/components/**/*.{js,ts,jsx,tsx,mdx}',
          './src/app/**/*.{js,ts,jsx,tsx,mdx}',
     ],
     theme: {
          extend: {  animation: {
      'spin': 'spin 10s linear infinite',
    },
               colors: {
                    primary: {
                         light: '#ffffff',
                         dark: '#1a1a1a',
                    },
                    secondary: {
                         light: '#f3f4f6',
                         dark: '#2d2d2d',
                    },
                    text: {
                         light: '#000000',
                         dark: '#ffffff',
                    },
               },
          },
     },
     plugins: [scrollbar],
} satisfies Config;
