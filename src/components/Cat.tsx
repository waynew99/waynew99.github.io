import { useState } from 'react';
import { animated, useSpring } from '@react-spring/web'

export default function Cat() {
  const [isHover, setIsHover] = useState(false);

  const springConfig = {
    mass: 1,
    tension: 200,
    friction: 30
  };

  const props = useSpring({
    scale: isHover ? 1.3 : 1,
    boxShadow: isHover ? '0 0 5px 3px rgba(0,0,0,0.3)' : '3px 3px 5px 2px rgba(0,0,0,0)',
    config: springConfig
  });

  return (
    <div className='sticky bottom-0 right-0 flex justify-end'>
        <a href='https://www.instagram.com/lifeofliuqi67/' target='_blank' rel='noreferrer' >
        <animated.div className={'w-20 h-20 mr-10 mb-10 rounded-full'} style={props}>
          <img
            className={'w-20 h-20 rounded-full'}
            src={`${process.env.PUBLIC_URL}/cat.gif`}
            alt='cat'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          />
        </animated.div>
        </a>
    </div>
  );
}