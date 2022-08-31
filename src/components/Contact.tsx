import { useEffect, useState } from 'react';
import FadeInEffect from '../Animations/FadeInEffect';
import data from '../Data/data.json';
import { Waypoint } from 'react-waypoint';
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
        <ContactItem
          text={contact.name}
          icon={contact.icon_name}
          url={contact.url}
        />
      </FadeInEffect>
    </div>

  ));

  return (
    <div ref={scrollRef} className='pt-48'>
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
          <p className='mt-20'>
          &copy; {new Date().getFullYear()}&nbsp;Made with ❤ by <a className='underline underline-offset-4' href='https://github.com/waynew99' target='_blank'>Wayne Wang</a>
          </p>
          <p className='mt-2'>
            Inspired by <a className='underline underline-offset-4' href='https://github.com/chetanverma16/react-portfolio-template' target='_blank'>Chetan</a>
          </p>
        </div>
      </Waypoint>
    </div>
  );
}