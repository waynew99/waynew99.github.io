import { useState } from 'react';
import { animated, useSpring } from '@react-spring/web'

export default function Cat() {
  const [isHover, setIsHover] = useState(false);

  const props = useSpring({
    scale: isHover ? 1.3 : 1,
    config: {
      mass: 1,
      tension: 200,
      friction: 30
    }
  });

  return (
    <div className='sticky bottom-0 right-0 flex justify-end'>
        <a href='https://www.instagram.com/lifeofliuqi67/' target='_blank' rel='noreferrer' >
        <animated.div style={props}>
          <img
            className={'w-20 h-20 mr-10 mb-10 rounded-full'}
            src={'/cat.gif'}
            alt='cat'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          />
        </animated.div>
        </a>
    </div>
  );
}