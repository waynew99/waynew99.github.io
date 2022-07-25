import MenuBar from './MenuBar';
import HomeTextLines from './HomeTextLines';
import Works from './Works';
import { useRef, useState } from 'react';
import Cat from './Cat';


export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);

  const [currInView, setCurrInView] = useState<'Home' | 'Works'>('Home');

  const handleClick = (text: string) => {
    if (text === 'Home') {
      setCurrInView('Home');
      homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (text === 'Works') {
      worksRef.current?.scrollIntoView({ behavior: 'smooth' });
      setCurrInView('Works');
    } else if (text === 'Résumé') {
      window.open('/Résumé.pdf', '_blank');
    }
  }

  return (
    <div className='justify-center' ref={homeRef}>
      <MenuBar handleClick={handleClick} mode={currInView} />
      <HomeTextLines onInView={() => setCurrInView('Home')} />
      <Works scrollRef={worksRef} onInView={() => setCurrInView('Works')} />
      <Cat />
    </div>
  );
}