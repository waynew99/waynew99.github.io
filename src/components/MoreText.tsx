import FadeIn from '../Animations/FadeInEffect';
import { useState, useEffect } from 'react';
import GradientText from '../Animations/GradientText';
import _ from 'lodash';

interface MoreTextProps {
  scrollRef: React.RefObject<HTMLDivElement>;
  onButtonHover: (hover: boolean) => void;
}

export default function MoreText({ scrollRef, onButtonHover }: MoreTextProps) {
  const [linesVisibility, setLinesVisibility] = useState(Array(5).fill(false));


  const textLines = [
    <p>
      I'm a
      <GradientText text=' Computer Science ' />
      major super senior-feb at Middlebury College.
    </p>,
    <p>
      I love exploring and researching
      <GradientText text=' operating systems' />
      , security, networking, and other tech infrastructures, as the ins-and-outs of systems fascinate me.
    </p>,
    <p>
      My concern about how tech impacts society motivates me to build
      <GradientText text=' human-centered ' />
      and elegant front-end experiences.
    </p>,
    <p className='mt-8'>
      Outside of tech, I am also interested in the intricacies of political systems and societies, as I also minor in <GradientText text=' Political Science' />.
    </p>,
    <p>
      I'm fortunate to enjoy the companion of two <GradientText text=' cats ' />back at home, <GradientText text=' 六六 ' /> and <GradientText text=' 小七 ' />, who will be thrilled if you come visit them through the&nbsp;
      <span
        onMouseEnter={() => onButtonHover(true)}
        onMouseLeave={() => onButtonHover(false)}
        className='underline underline-offset-2 cursor-pointer'
      >button</span> at the bottom right corner :D
    </p>
  ]

  /*
  Testing purpose. To see all gradient choices.
  textLines.push(...Object.entries(data.gradients).map(([key, value]) => (
    <p>
      <GradientText text={key} gradientName={key}/>
    </p>
  )));
  */

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
    <div ref={scrollRef} className={'px-20 pt-48 h-screen text-left text-2xl leading-relaxed'}>
      {textLinesAnimated}
    </div>
  );
}