import { useState } from 'react';
import CardHoverEffect from '../Animations/CardHoverEffect';
import LinkHoverEffect from '../Animations/LinkHoverEffect';

interface WorkCardProps {
  img: string,
  title?: string,
  description?: string,
  onClick: () => void,
  lineColor?: string,
}

export default function WorkCard({ img, title, description, onClick, lineColor = 'bg-black' }: WorkCardProps) {
  const [isHover, setIsHover] = useState(false);
  
  return (
    <CardHoverEffect isHover={isHover}>
      <div
        className='overflow-hidden cursor-pointer rounded-lg p-2 '
        onClick={onClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className='h-100 overflow-hidden rounded-2xl'>
          <img className='h-full w-full object-cover' alt={title} src={img} />
        </div>
        <div className='w-fit'>
          <LinkHoverEffect isHover={isHover} yOffset={10} underlineHeight={2} useGradient>
            <h1 className='mt-5 text-3xl font-medium mr-6'> {title ?? 'Project Name'} </h1>
          </LinkHoverEffect>
        </div>
        <div className='w-fit'>
          <LinkHoverEffect isHover={isHover} yOffset={1} underlineHeight={1} lineColor={lineColor}>
            <h2 className='text-xl opacity-50'> {description ?? 'Description'} </h2>
          </LinkHoverEffect>
        </div>

      </div>
    </CardHoverEffect>
  );
}
