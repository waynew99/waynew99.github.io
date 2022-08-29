import { animated, useSpring } from '@react-spring/web'

const FadeInEffect = ({ isVisible, children } : { isVisible: boolean, children: React.ReactElement }) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -10,
    y: isVisible ? 0 : 70,
    config: {
      mass: 1,
      tension: 300,
      friction: 70
    }
  });

  return <animated.div style={styles}>{children}</animated.div>
}

export default FadeInEffect;
