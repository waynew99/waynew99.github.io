import { animated, useSpring } from '@react-spring/web'

const FadeIn = ({ isVisible, children } : { isVisible: boolean, children: React.ReactElement }) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    config: { duration: 500 }
  })

  return <animated.div style={styles}>{children}</animated.div>
}

export default FadeIn;
