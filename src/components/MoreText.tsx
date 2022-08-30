import FadeIn from '../Animations/FadeInEffect';
import { useState, useEffect } from 'react';
import LinkHoverEffect from '../Animations/LinkHoverEffect';
import Gradient from 'rgt';

interface MoreTextProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

export default function MoreText({ scrollRef }: MoreTextProps) {
  const [linesVisibility, setLinesVisibility] = useState(Array(4).fill(false));

  const textLines = [
    <p> More lines here</p>,
    <p> More lines here</p>,
    <p> More lines here</p>
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
    <div ref={scrollRef} className={'pl-20 pt-64 h-screen text-left text-5xl leading-relaxed'}>
      {textLinesAnimated}
    </div>
  );
}