import { useState } from 'react';
import CardHoverEffect from '../Animations/CardHoverEffect';
import LinkHoverEffect from '../Animations/LinkHoverEffect';

interface WorkCardProps {
  img: string,
  title?: string,
  description?: string,
  extraInfo?: {
    paper?: string,
    presentation?: string,
  }
  onClick: () => void,
}

export default function WorkCard({ img, title, description, extraInfo, onClick }: WorkCardProps) {
  const [isHover, setIsHover] = useState(false);
  const [paperHover, setIsPaperHover] = useState(false);
  const [presentationHover, setIsPresentationHover] = useState(false);

  return (
    <div>
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
              <h1 className='mt-5 text-3xl font-medium'> {title ?? 'Project Name'} </h1>
            </LinkHoverEffect>
          </div>
          <div className='w-fit'>
            <LinkHoverEffect isHover={isHover} yOffset={1} underlineHeight={2} lineColor={'bg-gray-600'}>
              <h2 className='text-xl text-gray-600'> {description ?? 'Description'} </h2>
            </LinkHoverEffect>
          </div>
        </div>
      </CardHoverEffect>
      {
        extraInfo ? (
          <div className='flex flex-row'>
            <div 
              className='mx-2'
              onMouseEnter={() => setIsPaperHover(true)} 
              onMouseLeave={() => setIsPaperHover(false)}
            >
              <LinkHoverEffect isHover={paperHover} yOffset={1} underlineHeight={2} zoomScale={1.2} useGradient>
                <a href={extraInfo.paper} target='_blank' rel='noreferrer'> Paper </a>
              </LinkHoverEffect>
            </div>
            <div 
              className='mx-2'
              onMouseEnter={() => setIsPresentationHover(true)}
              onMouseLeave={() => setIsPresentationHover(false)}
            >
              <LinkHoverEffect isHover={presentationHover} yOffset={1} underlineHeight={2} zoomScale={1.2} useGradient>
                <a href={extraInfo.presentation} target='_blank' rel='noreferrer'> Presentation </a>
              </LinkHoverEffect>
            </div>
          </div>
        ) : <></>
      }
    </div>
  );
}
