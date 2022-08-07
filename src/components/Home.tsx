import MenuBar from './MenuBar';
import HomeTextLines from './HomeTextLines';
import Works from './Works';
import { useRef } from 'react';
import Cat from './Cat';


export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);

  const handleClick = (text: string) => {
    if (text === 'Home') {
      homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (text === 'Works') {
      worksRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (text === 'Résumé') {
      window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank');
    }
  }

  return (
    <div className='justify-center' ref={homeRef}>
      <MenuBar handleClick={handleClick} />
      <HomeTextLines />
      <Works scrollRef={worksRef} />
      <Cat />
    </div>
  );
}