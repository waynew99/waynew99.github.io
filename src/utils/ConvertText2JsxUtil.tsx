import GradientText from '../Animations/GradientText';
import LinkHoverEffect from '../Animations/LinkHoverEffect';

const text2jsx = (text: string) => {
  const lines = text.split('\n');
  const jsx = lines.map((line, i) => {
    if (line.match(/(?:<br[^<]+\/>)/g)) {
      return <br />;
    }

    // find all *text* and [text](link)
    const regex = /\*(?:[^*]+)\*|\[(?:[^\]]+)\]\((?:[^\)]+)\)/g;
    const matches = line.match(regex);

    if (!matches) {
      return (<div>{line}</div>);
    }

    const elements = matches?.map(match => {
      if (match.startsWith('*')) {
        // *text*
        const text = match.substring(1, match.length - 1);
        return <GradientText text={text} />;
      } else if (match.startsWith('[')) {
        // [text](link)
        const text = match.substring(1, match.indexOf(']'));
        const link = match.substring(match.indexOf('(') + 1, match.indexOf(')'));
        return (
          <a href={link} target='_blank' rel='noreferrer' className='inline-block'>
            <LinkHoverEffect underlineHeight={2} useGradient>
              <GradientText text={text} />
            </LinkHoverEffect>
          </a>
        );
      }
    });

    const pureTexts = line.split(regex).map(text => {
      return <span>{text}</span>;
    });

    const newLine = [];
    // check if line starts with *text* or [text](link)
    const startWithElement = line.startsWith('*') || line.startsWith('[');

    while (pureTexts.length > 0 || elements.length > 0) {
      if (startWithElement) {
        newLine.push(elements.shift());
        newLine.push(pureTexts.shift());
      } else {
        newLine.push(pureTexts.shift());
        newLine.push(elements.shift());
      }
    }
    return (<div key={i} className="mt-2">{newLine}</div>);
  });

  return jsx;
};


export default text2jsx;