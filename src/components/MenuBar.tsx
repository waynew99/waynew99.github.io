

export default function MenuBar() {
  const menuBarItemTexs = [
    'Home',
    'About',
    'Works',
    'Résumé',
  ]

  const menuBarItems = menuBarItemTexs.map((text, index) => (
    <a className={'mr-6 text-lg'} href={`#${text.toLowerCase()}`}>{text}</a>
  ));


  return (
    <div className="mt-6 flex flex-row justify-between items-center">
      <a href={'#home'}>
        <img className={'ml-12 w-20 h-20'} src={'logo.svg'} alt="logo" />
      </a>

      <div className={'mr-10 flex justify-end align-middle'}>
        {menuBarItems}
      </div>
    </div>
  );
}