import FadeIn from '../Animations/FadeInEffect';
import { useState, useEffect, ReactElement } from 'react';
import LinkHoverEffect from '../Animations/LinkHoverEffect';
import { useSpring, animated } from '@react-spring/web';
import { IoArrowDown } from 'react-icons/io5';
import GradientText from '../Animations/GradientText';
import { introText } from '../Data/text';

export default function HomeTextLines({ onMoreClick }: { onMoreClick: () => void }) {
  const [linesVisibility, setLinesVisibility] = useState(Array(introText.split('\n').length + 1).fill(false));
  const [isMoreHover, setIsMoreHover] = useState(false);

  const moreProps = useSpring({
    opacity: isMoreHover ? 1 : 0,
    config: { duration: 300 }
  });

  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i < linesVisibility.length; i++) {
        setTimeout(() => {
          setLinesVisibility(prevState => {
            const newState = [...prevState];
            newState[i] = true;
            return newState;
          });
        }, i * 200);
      }
    }, 300);
  }, []);

  const location = (
    <div>
      I'm currently based in &nbsp;
      <a 
        href='https://www.google.com/maps/place/Middlebury' 
        target="_blank" 
        className='w-fit italic inline-block'
      >
        <LinkHoverEffect
          underlineHeight={3}
          zoomScale={1.1}
          useGradient
        >
          <div className='flex flex-row'>
            <GradientText gradientName='myColor'>
              <span>Middlebury, </span>
            </GradientText>
            &nbsp;
            <span className='text-[#14532D] font-bold'>Vermont.</span>
          </div>
        </LinkHoverEffect>
      </a>
    </div>
  );

  const more = (
    <div
      className={'w-fit text-lg sm:text-2xl mt-8 cursor-pointer'}
      onMouseEnter={() => setIsMoreHover(true)}
      onMouseLeave={() => setIsMoreHover(false)}
      onClick={onMoreClick}
    >
      <LinkHoverEffect
        underlineHeight={2}
        zoomScale={1.1}
        useGradient
      >
        <div className='flex'>
          <span className='italic'>More</span>
          <animated.div className='text-xl ml-2 flex flex-col justify-center' style={moreProps} >
            <IoArrowDown />
          </animated.div>
        </div>
      </LinkHoverEffect>
    </div>
  );

  const textLinesAnimated = introText.split('\n').map((line, index) => {
    return (
      <div key={index}>
        <FadeIn isVisible={linesVisibility[index]}>
          {
            line === '{Location}' ? location :
              line === '{More}' ? more :
                <p>{line}</p>
          }
        </FadeIn>
      </div>)
  });


  return (
    <div className={'pl-8 sm:pl-20 pt-48 sm:pt-56 h-screen text-left text-xl sm:text-4xl leading-relaxed sm:leading-relaxed h-fit'}>
      {textLinesAnimated}
    </div>
  );
}