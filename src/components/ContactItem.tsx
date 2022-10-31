import LinkHoverEffect from '../Animations/LinkHoverEffect';
import { IoLogoGithub, IoLogoLinkedin, IoCallOutline, IoLogoWechat, IoMail, IoLocationSharp } from 'react-icons/io5';

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
  { name: 'location', content: <IoLocationSharp size={icon_size} /> }
];

export default function ContactItem({ text, icon, url }: { text: string, icon: string, url: string }) {

  return (
    <a href={url} target="_blank">
      <button className="btn btn-ghost normal-case text-xl">
        <div className='mr-2 flex flex-col justify-center'>
          {avail_icons.find(ic => ic.name === icon)?.content}
        </div>
        <span>{text}</span>
      </button>
    </a>
    /*
    <div className={'mt-4 sm:mt-0 mr-0 sm:mr-16 cursor-pointer'}>
      <LinkHoverEffect underlineHeight={2} useGradient>
        <a className='flex flex-row' href={url} target="_blank">
          <div className='mr-2 flex flex-col justify-center'>
            {avail_icons.find(ic => ic.name === icon)?.content}
          </div>
          <p className='text-xl'>{text}</p>
        </a>
      </LinkHoverEffect>
    </div>
    */
  );
}