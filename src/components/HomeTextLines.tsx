import FadeIn from '../Animations/FadeInEffect';
import { useState, useEffect } from 'react';
import LinkHoverEffect from '../Animations/LinkHoverEffect';
import { useSpring, animated } from '@react-spring/web';
import { IoArrowDown } from 'react-icons/io5';
import GradientText from '../Animations/GradientText';

export default function HomeTextLines({ onMoreClick }: { onMoreClick: () => void }) {
  const [linesVisibility, setLinesVisibility] = useState(Array(5).fill(false));
  const [isLocationHover, setIsLocationHover] = useState(false);
  const [isMoreHover, setIsMoreHover] = useState(false);

  const moreProps = useSpring({
    opacity: isMoreHover ? 1 : 0,
    config: { duration: 300 }
  });

  const textLines = [
    <p> Hi 👋 你好！</p>,
    <p> I'm Wayne Wang - student, </p>,
    <p> developer, and researcher based at</p>,
    <div
      className={'w-fit italic'}
      onMouseEnter={() => setIsLocationHover(true)}
      onMouseLeave={() => setIsLocationHover(false)}
    >
      <a href='https://www.google.com/maps/place/Middlebury' target="_blank">
        <LinkHoverEffect
          isHover={isLocationHover}
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
    </div>,
    <div
      className={'w-fit text-2xl mt-8 cursor-pointer'}
      onMouseEnter={() => setIsMoreHover(true)}
      onMouseLeave={() => setIsMoreHover(false)}
      onClick={onMoreClick}
    >
      <LinkHoverEffect
        isHover={isMoreHover}
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
  ]

  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i < linesVisibility.length; i++) {
        setTimeout(() => {
          setLinesVisibility(prevState => {
            const newState = [...prevState];
            newState[i] = true;
            return newState;
          });
        }, i * 300);
      }
    }, 300);
  }, []);

  const textLinesAnimated = textLines.map((text, index) => (
    <div key={index}>
      <FadeIn isVisible={linesVisibility[index]}>
        {text}
      </FadeIn>
    </div>
  ));


  return (
    <div className={'pl-20 pt-64 h-screen text-left text-5xl leading-relaxed'}>
      {textLinesAnimated}
    </div>
  );
}