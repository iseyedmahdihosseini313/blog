import { TypeWriter } from '@/components';

export default function Page() {
     const text = `Hello, I'm Seyed Mahdi Hosseini, born on December 13, 1998, in Gonbad Kavoos city. I have made a promise to myself never to let any obstacle hinder my progress. I value respect highly and treat others with the same respect I expect in return. I take life and work seriously to make the most of my time.

I believe in treating others well and expect the same treatment in return. I avoid getting involved in peripheral matters as I have valuable goals to pursue, and distractions would only lead me away from my objectives. I always seek to associate with people who are more accomplished than me to elevate myself. I am responsible and value my reputation greatly.

I have faced various challenges in life and learned from them, always keeping my faith in God and the Ahl al-Bayt. I am actively working towards my future. I know I will encounter different people and challenges throughout my life, and I pray to God to place good people in my path who can both help me grow and benefit from my abilities.

I deeply value and remain loyal to those who have stood by me during difficult times. While studying Software Engineering, I worked at Pishgaman Yazd Company in their electronics division. During my time there, I gained valuable experience and had the pleasure of working alongside wonderful colleagues. I believe I proved myself well to the company's leadership, handling sensitive and expensive SMD projects. However, due to my passion for programming, I resigned and completed my bachelor's degree in Software Engineering.

After graduation, I dedicated myself to learning frontend development, acquiring various skills in this field. I have set short-term, medium-term, and long-term goals for myself. I won't give up and will continue striving to achieve my goals with God's grace and Imam Hussein's blessings. I want my efforts to leave a positive mark in history while I'm alive.

I pray to God to guide me in all aspects of my life. I believe I need no one but God and seek help only from Him. I pray He places wise and accomplished people in my path to help me progress toward my goals.`;
     return (
          <div className="min-h-screen flex items-center justify-center">
               <TypeWriter text={text} />
          </div>
     );
}
