import { animated, useSpring } from '@react-spring/web'

interface LinkHoverProps {
  isHover: boolean,
  children: React.ReactElement,
  yOffset: number
  underlineHeight: number
  zoomScale?: number
  useGradient?: boolean
}

const LinkHoverEffect = ({ isHover, children, yOffset, underlineHeight, zoomScale=1, useGradient=false }: LinkHoverProps) => {

  const config =  {
    mass: 1,
    tension: 200,
    friction: 30
  }

  const underlineProps = useSpring({
    opacity: isHover ? 1 : 0,
    width: isHover ? '100%' : '0%',
    config
  });

  const textProps = useSpring({
    //color: isHover ? '#aa0' : '#000',
    scale: isHover ? zoomScale : 1,
    config
  });

  const myLineColor = useGradient ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500' : '';

  return (
    <div>
      <animated.div style={textProps}>
        {children}
      </animated.div>
      <animated.div 
        className={`-translate-y-${yOffset} ${myLineColor}`}
        style={{
        ...underlineProps,
        position: 'relative',
        height: `${underlineHeight}px`,
        backgroundColor: '#000',
      }} />

    </div>

  )
}

export default LinkHoverEffect;
