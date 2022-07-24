import { animated, useSpring } from '@react-spring/web'

interface CardHoverEffectProps {
  isHover: boolean,
  children: React.ReactElement,
}

const CardHoverEffect = ({ isHover, children }: CardHoverEffectProps) => {

  const textProps = useSpring({
    scale: isHover ? 1.1 : 1,
    config: {
      mass: 1,
      tension: 200,
      friction: 30
    }
  });

  return (
      <animated.div style={textProps}>
        {children}
      </animated.div>
  )
}

export default CardHoverEffect;
