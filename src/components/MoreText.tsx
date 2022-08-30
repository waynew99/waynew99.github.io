import FadeIn from '../Animations/FadeInEffect';
import { useState, useEffect } from 'react';

interface MoreTextProps {
  scrollRef: React.RefObject<HTMLDivElement>;
  onButtonHover: (hover: boolean) => void;
}

export default function MoreText({ scrollRef, onButtonHover }: MoreTextProps) {
  const [linesVisibility, setLinesVisibility] = useState(Array(6).fill(false));

  const textLines = [
    <p>
      I'm a CS major super senior-feb at Middlebury College.
    </p>,
    <p>
      I love exploring and researching <span className='font-bold'>operating systems</span>, security, networking, and other tech infrastructures, as the ins-and-outs of systems fascinate me.
    </p>,
    <p>
      My concern about how tech impacts society motivates me to build <span className='font-bold'>human-centered</span> and elegant front-end experiences.
    </p>,
    <p className='mt-8'>
      Outside of tech, I am also interested in the intricacies of political systems and societies, as I also minor in Political Science.
    </p>,
    <p>
      I'm fortunate to enjoy the companion of two cats back at home, <span className='font-bold'>六六</span> and <span className='font-bold'>小七</span>, who will be thrilled =D if you come visit them through the <span
        onMouseEnter={() => onButtonHover(true)}
        onMouseLeave={() => onButtonHover(false)}
        >button</span> at the bottom right corner.
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