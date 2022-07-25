import FadeIn from '../Animations/FadeInEffect';
import { useState, useEffect } from 'react';
import LinkHoverEffect from '../Animations/LinkHoverEffect';
import Gradient from 'rgt';
import { Waypoint } from 'react-waypoint';

interface HomeTextLinesProps {
  onInView: () => void;
}

export default function HomeTextLines({ onInView }: HomeTextLinesProps) {
  const [linesVisibility, setLinesVisibility] = useState(Array(4).fill(false));
  const [isLocationHover, setIsLocationHover] = useState(false);

  const textLines = [
    <p> Hi 👋 你好！</p>,
    <p> I'm Wayne Wang - curious </p>,
    <p> developer and student based at</p>,
    <div
      className={'w-fit'}
      onMouseEnter={() => setIsLocationHover(true)}
      onMouseLeave={() => setIsLocationHover(false)}
    >
      <a href='https://www.google.com/maps/place/Middlebury' target="_blank">
        <LinkHoverEffect
          isHover={isLocationHover}
          yOffset={2}
          underlineHeight={3}
          zoomScale={1.1}
          useGradient
        >
          <div className='flex flex-row mr-20 font-bold italic'>
            <Gradient dir="left-to-right" from="#F72585" to="#4CC9F0">Middlebury,</Gradient>
            <div className='ml-4' >
              <Gradient dir="left-to-right" from="#14532D" to="#14532D">Vermont.</Gradient>
            </div>
          </div>
        </LinkHoverEffect>
      </a>

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
        }, i * 200);
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
    <Waypoint onEnter={onInView}>
      <div className={'pl-20 pt-64 h-screen text-left text-5xl leading-relaxed'}>
        {textLinesAnimated}
      </div>
    </Waypoint>
  );
}