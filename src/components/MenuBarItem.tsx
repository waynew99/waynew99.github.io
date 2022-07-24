import { useState } from 'react';
import LinkHoverEffect from '../Animations/LinkHoverEffect';

export default function MenuBarItem({ text, onClick }: { text: string, onClick: (text : string) => void }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <a
      className={'mr-10 text-lg cursor-pointer'}
      onClick={() => onClick(text)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <LinkHoverEffect isHover={isHover} yOffset={1} underlineHeight={2}>
        <>{text}</>
      </LinkHoverEffect>
    </a>
  );
}