import { useState } from 'react';
import LinkHoverEffect from '../Animations/LinkHoverEffect';

export default function ContactItem({ text, useGradient }: { text: string, useGradient?: boolean }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={'mr-10 text-lg cursor-pointer'}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <LinkHoverEffect isHover={isHover} yOffset={1} underlineHeight={2}  useGradient>
        <>{text}</>
      </LinkHoverEffect>
    </div>
  );
}