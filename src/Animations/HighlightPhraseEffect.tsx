import { animated, useSpring } from '@react-spring/web'
import Gradient from 'rgt';

interface HighlightPhraseProps {
  isHover: boolean,
  children: React.ReactElement,
  zoomScale?: number
  useGradient?: boolean
}

const HighlightPhraseEffect = ({ isHover, children, zoomScale = 1 }: HighlightPhraseProps) => {

  const textProps = useSpring({
    scale: isHover ? zoomScale : 1,
    config: { mass: 1, tension: 200, friction: 30 }
  });

  return (
    <animated.span style={{
      ...textProps,
      display: 'inline-block',
    }}>
      {
        isHover ? (
          <Gradient dir="left-to-right" from="#F72585" to="#4CC9F0"> {children} </Gradient>
        ) : (
          children
        )
      }
    </animated.span>
  )
}

export default HighlightPhraseEffect;
