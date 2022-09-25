import { animated, useSpring } from '@react-spring/web'
import { useEffect, useState } from 'react'

interface LinkHoverProps {
  shouldHover?: boolean,
  children: React.ReactElement
  underlineHeight: number | string,
  zoomScale?: number
  useGradient?: boolean
  lineColor?: string
}

const LinkHoverEffect = ({ shouldHover, children, underlineHeight, zoomScale = 1, useGradient = false, lineColor = '' }: LinkHoverProps) => {

  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (shouldHover !== undefined) {
      setIsHover(shouldHover);
    }
  }, [shouldHover]);

  const config = {
    mass: 1,
    tension: 200,
    friction: 30
  }

  const underlineProps = useSpring({
    scale: isHover ? zoomScale : 1,
    opacity: isHover ? 1 : 0,
    width: isHover ? '100%' : '0%',
    config
  });

  const textProps = useSpring({
    scale: isHover ? zoomScale : 1,
    config
  });

  const myLineColor = useGradient ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500' : lineColor;

  return (
    <div
      onMouseEnter={() => { if (shouldHover===undefined) { setIsHover(true); } }}
      onMouseLeave={() => { if (shouldHover===undefined) { setIsHover(false); } }}
    >
      <animated.div style={textProps}>
        {children}
      </animated.div>
      <animated.div
        className={myLineColor}
        style={{
          ...underlineProps,
          position: 'relative',
          height: `${underlineHeight}px`,
        }} />

    </div>

  )
}

export default LinkHoverEffect;
