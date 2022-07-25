import { useState } from 'react';
import LinkHoverEffect from '../Animations/LinkHoverEffect';
import MenuBarItem from './MenuBarItem';
import { animated, useSpring } from '@react-spring/web'

interface MenuBarProps {
  handleClick: (text: string) => void,
  mode: 'Home' | 'Works'
}

export default function MenuBar({ handleClick, mode }: MenuBarProps) {
  const [isLogoHover, setIsLogoHover] = useState(false);

  const menuBarItemTexs = [
    'Home',
    'Works',
    'Résumé',
    'About',
    'Contact',
  ]

  const modes = {
    'Home': {
      'bgColor': '#fff',
      'textColor': '#000',
      'logoColor': '#000',
      'logoSrc': '/logoBlack.png',
    },
    'Works': {
      'bgColor': '#475569', // tailwind.css's slate-600
      'textColor': '#fff',
      'logoColor': '#fff',
      'logoSrc': '/logoWhite.png',
    }
  }

  const handleMenuBarItemClick = (text: string) => {
    handleClick(text);
  }

  const menuBarItems = menuBarItemTexs.map((text) => (
    <MenuBarItem key={text} text={text} onClick={handleMenuBarItemClick} lineColor={modes[mode].textColor==='#fff' ? 'bg-white' : 'bg-black'} />
  ));

  const springProps = useSpring({
    backgroundColor: modes[mode].bgColor,
    color: modes[mode].textColor,
    config: {
      mass: 1,
      tension: 200,
      friction: 30
    }
  });

  return (
    <animated.div style={springProps} className='fixed top-0 z-10 w-full'>
      <div className='pt-6 flex flex-row justify-between items-center'>
        <a
          className='cursor-pointer'
          onClick={() => handleMenuBarItemClick('Home')}
          onMouseEnter={() => setIsLogoHover(true)}
          onMouseLeave={() => setIsLogoHover(false)}
        >
          <LinkHoverEffect isHover={isLogoHover} yOffset={1} underlineHeight={0} zoomScale={1.3} >
            <img className={'ml-12 w-20 h-20'} src={modes[mode].logoSrc} alt='logo' />
          </LinkHoverEffect>
        </a>

        <div className={'mr-10 flex justify-end align-middle'}>
          {menuBarItems}
        </div>
      </div>
    </animated.div>
  );
}