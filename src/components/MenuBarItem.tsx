import LinkHoverEffect from '../Animations/LinkHoverEffect';

export default function MenuBarItem({ text, onClick, lineColor }: { text: string, onClick: (text : string) => void, lineColor?: string }) {

  return (
    <a className={'mr-4 sm:mr-10 text-lg cursor-pointer'} onClick={() => onClick(text)}>
      <LinkHoverEffect underlineHeight={2} lineColor={lineColor}>
        <>{text}</>
      </LinkHoverEffect>
    </a>
  );
}