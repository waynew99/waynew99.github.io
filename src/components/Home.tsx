import MenuBar from './MenuBar';
import FadeIn from '../Animations/FadeIn';
import { useState, useEffect } from 'react';


export default function Home() {
  const [linesVisibility, setLinesVisibility] = useState([false, false, false, false]);

  const textLinse = [
    <p> Hi 👋 </p>,
    <p> I'm Wayne Wang - curious </p>,
    <p> developer and student based at</p>,
    <p><a href='https://www.google.com/maps/place/Middlebury' target="_blank">Middlebury, Vermont</a>.</p>
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
    <div className='justify-center'>
      <MenuBar />
      <div className={'ml-20 mt-10 text-left margin-top-10 text-6xl leading-relaxed'}>
        {textLinesAnimated}
      </div>



    </div>
  );
}