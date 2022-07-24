import { animated, useSpring } from '@react-spring/web'

interface CardHoverEffectProps {
  isHover: boolean,
  children: React.ReactElement,
  scale?: number
}

const CardHoverEffect = ({ isHover, children, scale=1.05 }: CardHoverEffectProps) => {

  const props = useSpring({
    scale: isHover ? scale : 1,
    config: {
      mass: 1,
      tension: 200,
      friction: 30
    }
  });

  return (
    <animated.div style={props}>
      {children}
    </animated.div>
  )
}

export default CardHoverEffect;
