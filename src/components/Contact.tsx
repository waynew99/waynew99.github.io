import { useEffect, useState } from 'react';
import FadeInEffect from '../Animations/FadeInEffect';
import data from '../Data/data.json';
import WorkCard from './WordCard';
import { Waypoint } from 'react-waypoint';
import LinkHoverEffect from '../Animations/LinkHoverEffect';
import ContactItem from './ContactItem';

interface ContactProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

export default function Contact({ scrollRef }: ContactProps) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const [contactVisibility, setContactVisibility] = useState(Array(data.contacts.length + 1).fill(false));

  useEffect(() => {
    if (isOnScreen) {
      setTimeout(() => {
        for (let i = 0; i < contactVisibility.length; i++) {
          setTimeout(() => {
            setContactVisibility(prevState => {
              const newState = [...prevState];
              newState[i] = true;
              return newState;
            });
          }, i * 300);
        }
      }, 500);
    }
  }, [isOnScreen]);

  const contacts = data.contacts.map((contact, i) => (
    <div key={i}>
      {/* contactVisibility[0] is for the text line */}
      <FadeInEffect isVisible={contactVisibility[i + 1]}>
        <a href={contact.url} target="_blank">
          <ContactItem text={contact.name} />
        </a>
      </FadeInEffect>
    </div>

  ));

  return (
    <div>
      <div ref={scrollRef} className='pt-36'>
        <h1 className='ml-20 text-4xl text-bold'>Contact</h1>
        <Waypoint onEnter={() => {
          setIsOnScreen(true);
        }}>
          <div className='ml-20'>
            <FadeInEffect isVisible={contactVisibility[0]}>
              <p className='mt-10 text-6xl'>Let's connect!</p>
            </FadeInEffect>
            <div className='mt-10 flex flex-row'>
              {contacts}
            </div>
          </div>
        </Waypoint>
      </div>
    </div >
  );
}