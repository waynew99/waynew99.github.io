import { IoLogoGithub, IoLogoLinkedin, IoCallOutline, IoLogoWechat, IoMail, IoLocationSharp } from 'react-icons/io5';
import data from '../Data/data.json';

interface MenuBarProps {
  handleClick: (text: string) => void
}

interface icon {
  name: string,
  content: React.ReactElement,
}

export default function MenuBar({ handleClick }: MenuBarProps) {

  const menuBarItemTexts = [
    'Home',
    'Works',
    'Résumé',
    'Contact',
  ];

  const icon_size = '24';

  const avail_icons: icon[] = [
    { name: 'github', content: <IoLogoGithub size={icon_size} /> },
    { name: 'linkedin', content: <IoLogoLinkedin size={icon_size} /> },
    { name: 'email', content: <IoMail size={icon_size} /> },
    { name: 'telephone', content: <IoCallOutline size={icon_size} /> },
    { name: 'wechat', content: <IoLogoWechat size={icon_size} /> },
    { name: 'location', content: <IoLocationSharp size={icon_size} /> }
  ];

  const menuBarItems = menuBarItemTexts.map((text) => (
    <li><a onClick={() => handleClick(text)}>{text}</a></li>
  ));

  const contacts = data.contacts.map((contact, i) => (
    <li key={i}>
      <a href={contact.url} target="_blank">
        <div className='flex flex-col justify-center align-middle'>
          {avail_icons.find(ic => ic.name === contact.icon_name)?.content}
        </div>
      </a>
    </li>
  ));

  return (
    <div className='fixed top-0 z-10 w-full flex flex-col'>
      <div className="navbar bg-base-100 pt-6 sm:pl-6 pr-6">
        <div className="flex-1">
          <a
            className="btn btn-ghost normal-case text-2xl"
            onClick={() => handleClick('Home')}>
            {'Wayne Wang @ Midd'}
          </a>
          <div className="flex-none hidden md:block">
              <ul className="menu menu-horizontal text-lg p-0">
                {contacts}
              </ul>
            </div>
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal text-lg p-0">
            {menuBarItems}
          </ul>
        </div>
        <div className="dropdown dropdown-end block md:hidden">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
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