import MenuBar from './MenuBar';
import HomeTextLines from './HomeTextLines';
import Works from './Works';
import { useState, useRef } from 'react';
import Cat from './Cat';
import Contact from './Contact';
import MoreText from './MoreText';

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const moreTextRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [zoomCat, setZoomCat] = useState(false);

  const handleClick = (text: string) => {
    if (text === 'Home') {
      homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (text === 'More') {
      moreTextRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (text === 'Works') {
      worksRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (text === 'Résumé') {
      window.open(`${process.env.PUBLIC_URL}/Wayne-Wang-Resume.pdf`, '_blank');
    } else if (text === 'Contact') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className='justify-center' ref={homeRef}>
      <MenuBar handleClick={handleClick} />
      <HomeTextLines onMoreClick={()=>handleClick('More')}/>
      <MoreText scrollRef={moreTextRef} onButtonHover={setZoomCat}/>
      <Works scrollRef={worksRef} />
      <Contact scrollRef={contactRef} />
      <Cat zoomCat={zoomCat} />
    </div>
  );
}