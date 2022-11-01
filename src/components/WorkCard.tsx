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
    repo?: string,
  },
  tags: string[],
  newBadge: boolean,
  onClick: () => void,
}

export default function WorkCard({ img, title, description, extraInfo, tags, newBadge, onClick }: WorkCardProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <CardHoverEffect isHover={isHover}>
      <div
        className="overflow-hidden card h-100 bg-base-100 shadow-xl"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
        <figure
          className="cursor-pointer"
          onClick={onClick}
        ><img alt={title} src={process.env.PUBLIC_URL + img} /></figure>
        <div className="card-body">
          <h2 className='card-title'> {title ?? 'Project Name'}
            {newBadge ? <div className="badge badge-secondary">NEW</div> : null}
          </h2>
          <p>{description ?? 'Description'}</p>
          {
            extraInfo ? (
              <div className='flex flex-row text-gray-600 underline underline-offset-[5px] mb-4'>
                {extraInfo.paper ? <div className='mr-4'>
                  <LinkHoverEffect underlineHeight={2} zoomScale={1.2} useGradient>
                    <a href={`${extraInfo.paper.includes('http') ? '' : process.env.PUBLIC_URL}${extraInfo.paper}`} target='_blank' rel='noreferrer'> Paper </a>
                  </LinkHoverEffect>
                </div> : <></>}
                {extraInfo.presentation ? <div className='mr-4'>
                  <LinkHoverEffect underlineHeight={2} zoomScale={1.2} useGradient>
                    <a href={`${extraInfo.presentation.includes('http') ? '' : process.env.PUBLIC_URL}${extraInfo.presentation}`} target='_blank' rel='noreferrer'> Presentation </a>
                  </LinkHoverEffect>
                </div> : <></>}
                {extraInfo.repo ? <div className='mr-4'>
                  <LinkHoverEffect underlineHeight={2} zoomScale={1.2} useGradient>
                    <a href={`${extraInfo.repo.includes('http') ? '' : process.env.PUBLIC_URL}${extraInfo.repo}`} target='_blank' rel='noreferrer'> Repo </a>
                  </LinkHoverEffect>
                </div> : <></>}
              </div>
            ) : <></>
          }
          <div className="card-actions justify-end text-sm">
            {tags.map((tag, index) => (
              <span key={index} className='mr-2 mb-2 bg-slate-200 rounded px-2 py-1 text-sm'> {tag} </span>
            ))}
          </div>
        </div>
      </div>
    </CardHoverEffect>
  );
}
