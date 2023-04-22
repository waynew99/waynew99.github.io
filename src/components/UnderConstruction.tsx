import Cat from './Cat';
import { useEffect, useState } from 'react';

import FadeIn from '../Animations/FadeInEffect';
import LinkHoverEffect from '../Animations/LinkHoverEffect';

export default function Home() {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisibility(true);
    }, 300);
  }, []);

  return (
    // put at the middle of the screen
    <div data-theme='light' className='flex items-center justify-center h-screen w-screen'>
      {/* 
      <MenuBar handleClick={handleClick} />
      <HomeTextLines onMoreClick={()=>handleClick('More')}/>
      <MoreText scrollRef={moreTextRef} />
      <Works scrollRef={worksRef} />
      <Contact scrollRef={contactRef} />
      <Cat />      
      */}
      <FadeIn isVisible={visibility}>
        <LinkHoverEffect underlineHeight={3} zoomScale={1.2} useGradient>
          <p className='text-4xl'>Under Construction</p>
        </LinkHoverEffect> 
        
      </FadeIn>
      <Cat />
      
    </div>
  );
}