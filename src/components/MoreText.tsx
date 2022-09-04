import FadeIn from '../Animations/FadeInEffect';
import { useState, useEffect } from 'react';
import GradientText from '../Animations/GradientText';
import { Waypoint } from 'react-waypoint';
import LinkHoverEffect from '../Animations/LinkHoverEffect';

interface MoreTextProps {
  scrollRef: React.RefObject<HTMLDivElement>;
  onButtonHover: (hover: boolean) => void;
}

export default function MoreText({ scrollRef, onButtonHover }: MoreTextProps) {
  const [linesVisibility, setLinesVisibility] = useState(Array(5).fill(false));
  const [isOnScreen, setIsOnScreen] = useState(false);
  const [isMiddleburyHover, setIsMiddleburyHover] = useState(false);

  const textLines = [
    <div>
      I'm a
      <GradientText text=' Computer Science ' />
      major super senior-Feb (aka. one semester left) at&nbsp;
      <a href='https://www.middlebury.edu/' target='_blank' rel='noreferrer'
        onMouseEnter={() => setIsMiddleburyHover(true)}
        onMouseLeave={() => setIsMiddleburyHover(false)}
        className='inline-block'
      >
        <LinkHoverEffect isHover={isMiddleburyHover} underlineHeight={2} useGradient>
          <GradientText text=' Middlebury College ' />
        </LinkHoverEffect>
      </a>
      .
    </div>,
    <div>
      I love exploring and researching
      <GradientText text=' operating system kernels' />
      , security, networking, and other tech infrastructures, as the ins-and-outs of systems fascinate me.
    </div>,
    <div>
      My concern about how tech impacts society motivates me to build
      <GradientText text=' human-centered ' />
      and elegant front-end experiences.
    </div>,
    <div className='mt-8'>
      Outside of tech, I am also interested in the intricacies of political systems and societies, as I also minor in <GradientText text=' Political Science' />.
    </div>,
    <div>
      I'm fortunate to enjoy the companion of two <GradientText text=' cats ' />back at home, <GradientText text=' 六六 (Liu-Liu)' /> and <GradientText text=' 小七 (Xiao-Qi)' />, who will be thrilled if you could pay a visit by clicking the&nbsp;
      <span
        onMouseEnter={() => onButtonHover(true)}
        onMouseLeave={() => onButtonHover(false)}
        className='underline underline-offset-2'
      >button</span> at the bottom right corner :D
    </div>
  ]

  /*
  Testing purpose. To see all gradient choices.
  textLines.push(...Object.entries(data.gradients).map(([key, value]) => (
    <div>
      <GradientText text={key} gradientName={key}/>
    </div>
  )));
  */

  useEffect(() => {
    if (isOnScreen) {
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
    }
  }, [isOnScreen]);

  const textLinesAnimated = textLines.map((text, index) => (
    <div key={index}>
      <FadeIn isVisible={linesVisibility[index]}>
        {text}
      </FadeIn>
    </div>
  ));


  return (
    <div ref={scrollRef} className={'pl-8 sm:pl-20 pr-12 sm:pr-24 mt-36 pt-32 sm:mt-8 sm:pt-48 h-screen text-left text-xl sm:text-2xl leading-relaxed sm:leading-relaxed h-fit'}>
      <Waypoint onEnter={() => { setIsOnScreen(true) }}>
        <div>
          {textLinesAnimated}
        </div>
      </Waypoint>
    </div>
  );
}