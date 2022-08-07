import { useState } from 'react';
import CardHoverEffect from '../Animations/CardHoverEffect';
import LinkHoverEffect from '../Animations/LinkHoverEffect';

interface WorkCardProps {
  img: string,
  title?: string,
  description?: string,
  onClick: () => void,
}

export default function WorkCard({ img, title, description, onClick }: WorkCardProps) {
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
          <img className='h-full w-full object-cover' alt={title} src={process.env.PUBLIC_URL + img} />
        </div>
        <div className='w-fit'>
          <LinkHoverEffect isHover={isHover} yOffset={10} underlineHeight={2} useGradient>
            <h1 className='mt-5 text-3xl font-medium mr-6'> {title ?? 'Project Name'} </h1>
          </LinkHoverEffect>
        </div>
        <div className='w-fit'>
          <LinkHoverEffect isHover={isHover} yOffset={1} underlineHeight={2} lineColor={'bg-gray-600'}> 
            <h2 className='text-xl text-gray-600'> {description ?? 'Description'} </h2>
          </LinkHoverEffect>
        </div>

      </div>
    </CardHoverEffect>
  );
}
