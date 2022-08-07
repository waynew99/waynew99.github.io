import { useState } from 'react';
import LinkHoverEffect from '../Animations/LinkHoverEffect';
import MenuBarItem from './MenuBarItem';

interface MenuBarProps {
  handleClick: (text: string) => void
}

export default function MenuBar({ handleClick }: MenuBarProps) {
  const [isLogoHover, setIsLogoHover] = useState(false);

  const menuBarItemTexs = [
    'Home',
    'Works',
    'Résumé',
    'About',
    'Contact',
  ];

  const handleMenuBarItemClick = (text: string) => {
    handleClick(text);
  }

  const menuBarItems = menuBarItemTexs.map((text) => (
    <MenuBarItem key={text} text={text} onClick={handleMenuBarItemClick} lineColor={'bg-black'} />
  ));

  return (
    <div className='fixed top-0 z-10 w-full flex flex-col'>
      <div className='pt-6 flex flex-row justify-between items-center bg-white'>
        <a
          className='cursor-pointer'
          onClick={() => handleMenuBarItemClick('Home')}
          onMouseEnter={() => setIsLogoHover(true)}
          onMouseLeave={() => setIsLogoHover(false)}
        >
          <LinkHoverEffect isHover={isLogoHover} yOffset={1} underlineHeight={0} zoomScale={1.3} >
            <img className={'ml-12 w-20 h-20'} src={`${process.env.PUBLIC_URL}/logoBlack.png`} alt='logo' />
          </LinkHoverEffect>
        </a>

        <div className={'mr-10 flex justify-end align-middle'}>
          {menuBarItems}
        </div>
      </div>
      <div className='w-full h-4 bg-gradient-to-b from-white' />
    </div>
  );
}