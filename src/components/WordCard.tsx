import { useState } from 'react';
import CardHoverEffect from '../Animations/CardHoverEffect';

interface WorkCardProps {
  img: string,
  title?: string,
  description?: string,
  onClick: () => void
}

export default function WorkCard({ img, title, description, onClick }: WorkCardProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <CardHoverEffect isHover={isHover}>
      <div
        className='overflow-hidden cursor-pointer rounded-lg p-2'
        onClick={onClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className='h-80 overflow-hidden rounded-2xl'>
          <img className='h-full w-full object-cover' alt={title} src={img} />
        </div>
        <h1 className='mt-5 text-3xl font-medium'> {title ?? 'Project Name'} </h1>
        <h2 className='text-xl opacity-50'> {description ?? 'Description'} </h2>
      </div>
    </CardHoverEffect>
  );
}
