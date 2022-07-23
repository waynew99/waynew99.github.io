import { useState } from 'react';
import LinkHoverEffect from '../Animations/LinkHoverEffect';
import MenuBarItem from './MenuBarItem';


export default function MenuBar() {
  const [isLogoHover, setIsLogoHover] = useState(false);

  const menuBarItemTexs = [
    //'Home',
    'Works',
    'Résumé',
    'About',
    'Contact',
  ]

  const menuBarItems = menuBarItemTexs.map((text) => (
    <MenuBarItem text={text} />
  ));


  return (
    <div className="mt-6 flex flex-row justify-between items-center">
      <a
        href={'#home'}
        onMouseEnter={() => setIsLogoHover(true)}
        onMouseLeave={() => setIsLogoHover(false)}
      >
        <LinkHoverEffect isHover={isLogoHover} yOffset={1} underlineHeight={0} zoomScale={1.3}>
          <img className={'ml-12 w-20 h-20'} src={'logo.svg'} alt="logo" />
        </LinkHoverEffect>
      </a>

      <div className={'mr-10 flex justify-end align-middle'}>
        {menuBarItems}
      </div>
    </div>
  );
}