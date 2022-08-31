import _ from 'lodash';
import { useEffect, useState } from 'react';
import data from '../Data/data.json';
import classNames from 'classnames';

const GradientText = ({ children, text, gradientName }: { children?: React.ReactElement, text?: string, gradientName?: string }) => {
  const [myGradientName, setMyGradientName] = useState<string>('black');

  useEffect(() => {
    if (gradientName) {
      setMyGradientName(gradientName);
    } else {
      const randomGradient = _.sample(Object.keys(data.gradients));
      setMyGradientName(randomGradient ?? 'black');
    }
  }, []);

  const gradientObject: { [key: string]: boolean } = {};
  Object.entries(data.gradients).forEach(([k, v]) => {
    const newKey = `from-[${v[0]}] ${v.slice(1, v.length - 1).map(c => `via-[${c}]`).join(' ')} to-[${v[v.length - 1]}]`;
    gradientObject[newKey] = myGradientName === k;
  });
  gradientObject['from-black to-black'] = myGradientName === 'black';


  return (
    <span className={classNames('font-bold bg-clip-text text-transparent bg-gradient-to-r', gradientObject
    )}>
      {text === undefined ? children : <span>{text}</span>}
    </span>
  )
}

export default GradientText;