import { useState } from 'react';
import LinkHoverEffect from '../Animations/LinkHoverEffect';
import { IoLogoGithub, IoLogoLinkedin, IoCallOutline, IoLogoWechat, IoMail, IoGlobeOutline } from 'react-icons/io5';

interface icon {
  name: string,
  content: React.ReactElement,
}

const icon_size = '24';

const avail_icons: icon[] = [
  { name: 'github', content: <IoLogoGithub size={icon_size} /> },
  { name: 'linkedin', content: <IoLogoLinkedin size={icon_size} /> },
  { name: 'email', content: <IoMail size={icon_size} /> },
  { name: 'telephone', content: <IoCallOutline size={icon_size} /> },
  { name: 'wechat', content: <IoLogoWechat size={icon_size} /> },
  { name: 'website', content: <IoGlobeOutline size={icon_size} /> }
];

export default function ContactItem({ text, icon, url }: { text: string, icon: string, url: string }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={'mr-16 cursor-pointer'}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <LinkHoverEffect isHover={isHover} yOffset={2} underlineHeight={2} useGradient>
        <a className='flex flex-row' href={url} target="_blank">
          <div className='mr-2 flex flex-col justify-center'>
            {avail_icons.find(ic => ic.name === icon)?.content}
          </div>
          <p className='text-xl'>{text}</p>
        </a>
      </LinkHoverEffect>
    </div>
  );
}