import { useEffect, useState } from 'react';
import FadeInEffect from '../Animations/FadeInEffect';
import data from '../Data/data.json';
import WorkCard from './WorkCard';
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
          extraInfo={project.extraInfo}
          tags={project.tags}
        />
      </FadeInEffect>
    </div>

  ));

  return (
    <div ref={scrollRef} className='mt-8 sm:mt-24 pt-32 sm:pt-36'>
      <h1 className='ml-8 sm:ml-20 text-4xl text-bold'>Works</h1>
      <Waypoint onEnter={() => {
        setIsOnScreen(true);
      }}>
        <div className='mt-10 mx-10 sm:mx-60 grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-x-20 gap-y-16'>
          {wordCards}
        </div>
      </Waypoint>
    </div>
  );
}