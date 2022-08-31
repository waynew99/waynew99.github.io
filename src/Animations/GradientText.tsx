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

  /*
  const gradientObject: { [key: string]: boolean } = {};
  Object.entries(data.gradients).forEach(([k, v]) => {
    const newKey = `from-[${v[0]}] ${v.slice(1, v.length - 1).map(c => `via-[${c}]`).join(' ')} to-[${v[v.length - 1]}]`;
    gradientObject[newKey] = myGradientName === k;
  });
  gradientObject['from-black to-black'] = myGradientName === 'black';
  */

  return (
    <span className={classNames('font-bold bg-clip-text text-transparent bg-gradient-to-r', {
      'from-[#feac5e] via-[#c779d0] to-[#4bc0c8]': myGradientName === 'atlas',
      'from-[#473b7b] via-[#3584a7] to-[#30d2be]': myGradientName === 'mind',
      'from-[#ff5f6d] to-[#ffc371]': myGradientName === 'morning',
      'from-[#f43b47] to-[#453a94]': myGradientName === 'passion',
      'from-[#ff4e50] to-[#f9d423]': myGradientName === 'fruit',
      'from-[#833ab4] to-[#fd1d1d] via-[#fcb045]': myGradientName === 'instagram',
      'from-[#3f51b1] via-[#5a55ae] via-[#7b5fac] via-[#8f6aae] via-[#a86aa4] via-[#cc6b8e] via-[#f18271] via-[#f3a469] to-[#f7c978]': myGradientName === 'retro',
      'from-[#fdbb2d] to-[#22c1c3]': myGradientName === 'summer',
      'from-[#F72585] to-[#4CC9F0]': myGradientName === 'myColor',
      'from-[#000000] to-[#000000]': myGradientName === 'black',
    }
    )}>
      {text === undefined ? children : <span>{text}</span>}
    </span>
  )
}

export default GradientText;