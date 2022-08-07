import { useEffect, useState } from 'react';
import FadeInEffect from '../Animations/FadeInEffect';
import data from '../Data/data.json';
import WorkCard from './WordCard';
import { Waypoint } from 'react-waypoint';

interface WorksProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

export default function Works({ scrollRef }: WorksProps) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const [cardsVisibility, setCardsVisibility] = useState(Array(data.projects.length).fill(false));

  useEffect(() => {
    if (isOnScreen) {
      setTimeout(() => {
        for (let i = 0; i < cardsVisibility.length; i++) {
          setTimeout(() => {
            setCardsVisibility(prevState => {
              const newState = [...prevState];
              newState[i] = true;
              return newState;
            });
          }, i * 300);
        }
      }, 500);
    }
  }, [isOnScreen]);

  const wordCards = data.projects.map((project, i) => (
    <div key={i}>
      <FadeInEffect isVisible={cardsVisibility[i]}>
        <WorkCard
          key={project.id}
          img={project.img}
          title={project.title}
          description={project.description}
          onClick={() => window.open(project.url)}
        />
      </FadeInEffect>
    </div>

  ));

  return (
    <div>
      <div ref={scrollRef} className='pt-36'>
        <h1 className='ml-20 text-4xl text-bold'>Works</h1>
        <Waypoint onEnter={() => {
          setIsOnScreen(true);
        }}>
          <div className='mt-10 mx-60 grid grid-cols-2 grid-rows-2 gap-20'>
            {wordCards}
          </div>
        </Waypoint>
      </div>
    </div >
  );
}