import { useState } from 'react';
import LinkHoverEffect from '../Animations/LinkHoverEffect';

export default function MenuBarItem({ text }: { text: string }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <a
      className={'mr-10 text-lg'}
      href={`#${text.toLowerCase()}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <LinkHoverEffect isHover={isHover} yOffset={1} underlineHeight={2}>
        <>{text}</>
      </LinkHoverEffect>
    </a>
  );
}