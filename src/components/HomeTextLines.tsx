import FadeIn from '../Animations/FadeInEffect';
import { useState, useEffect } from 'react';
import LinkHoverEffect from '../Animations/LinkHoverEffect';


export default function HomeTextLines() {
  const [linesVisibility, setLinesVisibility] = useState([false, false, false, false]);

  const [isLocationHover, setIsLocationHover] = useState(false);

  const textLinse = [
    <p> Hi 👋 你好！</p>,
    <p> I'm Wayne Wang - curious </p>,
    <p> developer and student based at</p>,
    <p
      className={'w-fit'}
      onMouseEnter={() => setIsLocationHover(true)}
      onMouseLeave={() => setIsLocationHover(false)}
    >
      <a href='https://www.google.com/maps/place/Middlebury' target="_blank">
        <LinkHoverEffect
          isHover={isLocationHover}
          yOffset={2}
          underlineHeight={3}
        >
          <div className='flex flex-row'>
            <span>Middlebury, Vermont.</span>
            <div className='w-10' />
          </div>
        </LinkHoverEffect>
      </a>

    </p>
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

  const textLinesAnimated = textLinse.map((text, index) => (
    <FadeIn isVisible={linesVisibility[index]}>
      {text}
    </FadeIn>
  ));


  return (
    <div className={'ml-20 mt-10 text-left margin-top-10 text-6xl leading-relaxed'}>
      {textLinesAnimated}
    </div>
  );
}