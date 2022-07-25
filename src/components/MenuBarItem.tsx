import { useState } from 'react';
import LinkHoverEffect from '../Animations/LinkHoverEffect';

export default function MenuBarItem({ text, onClick, lineColor }: { text: string, onClick: (text : string) => void, lineColor?: string }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <a
      className={'mr-10 text-lg cursor-pointer'}
      onClick={() => onClick(text)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <LinkHoverEffect isHover={isHover} yOffset={1} underlineHeight={2} lineColor={lineColor}>
        <>{text}</>
      </LinkHoverEffect>
    </a>
  );
}