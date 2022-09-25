import FadeIn from '../Animations/FadeInEffect';
import { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import { moreText } from '../Data/text';
import text2jsx from '../utils/ConvertText2JsxUtil';

interface MoreTextProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

export default function MoreText({ scrollRef }: MoreTextProps) {
  const [linesVisibility, setLinesVisibility] = useState(Array(text2jsx(moreText).length).fill(false));
  const [isOnScreen, setIsOnScreen] = useState(false);

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

  const textLinesAnimated = text2jsx(moreText).map((text, index) => (
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