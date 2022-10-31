import LinkHoverEffect from '../Animations/LinkHoverEffect';
import MenuBarItem from './MenuBarItem';

interface MenuBarProps {
  handleClick: (text: string) => void
}

export default function MenuBar({ handleClick }: MenuBarProps) {

  const menuBarItemTexts = [
    'Home',
    'Works',
    'Résumé',
    'Contact',
  ];

  const menuBarItems = menuBarItemTexts.map((text) => (
    <li><a onClick={() => handleClick(text)}>{text}</a></li>
  ));

  return (
    <div className='fixed top-0 z-10 w-full flex flex-col'>
      <div className="navbar bg-base-100 pt-6">
        <div className="flex-1">
          <a
            className="btn btn-ghost normal-case text-2xl"
            onClick={() => handleClick('Home')}>Wayne Wang @ Midd</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal text-lg p-0">
            {menuBarItems}
          </ul>
        </div>
      </div>
      <div className='w-full h-4 bg-gradient-to-b from-white' />
    </div>
    /*
    <div className='fixed top-0 z-10 w-full flex flex-col'>
      <div className='pt-6 ml-8 sm:ml-0 flex flex-row justify-left sm:justify-between items-center bg-white'>
        <a
          className='cursor-pointer invisible w-0 sm:visible sm:w-fit'
          onClick={() => handleMenuBarItemClick('Home')}
        >
          <LinkHoverEffect underlineHeight={2} zoomScale={1.3} >
            <img className={'ml-12 w-20 h-20'} src={`${process.env.PUBLIC_URL}/logoBlack.png`} alt='logo' />
          </LinkHoverEffect>
        </a>

        <div className={'mr-4 md:mr-10 flex justify-end align-middle'}>
          {menuBarItems}
        </div>
      </div>
      <div className='w-full h-4 bg-gradient-to-b from-white' />
    </div>
   */

  );
}