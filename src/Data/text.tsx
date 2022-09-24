export const introText = `
Hi there 👋 !\n
Investment banker, lawyer, physician, scuba diver,\n
- I'm none of these things.\n
But I love building software, researching in systems, and am studying at\n
[Location]\n
[More]`;

export const moreText = `
<div>
      I'm a
      <GradientText text=' Computer Science ' />
      major super senior-Feb (aka. one semester left) at&nbsp;
      <a href='https://www.middlebury.edu/' target='_blank' rel='noreferrer'
        onMouseEnter={() => setIsMiddleburyHover(true)}
        onMouseLeave={() => setIsMiddleburyHover(false)}
        className='inline-block'
      >
        <LinkHoverEffect isHover={isMiddleburyHover} underlineHeight={2} useGradient>
          <GradientText text=' Middlebury College ' />
        </LinkHoverEffect>
      </a>
      .
    </div>,
    <div>
      I love exploring and researching
      <GradientText text=' operating system kernels' />
      , security, networking, and other tech infrastructures, as the ins-and-outs of systems fascinate me.
    </div>,
    <div>
      My concern about how tech impacts society motivates me to build
      <GradientText text=' human-centered ' />
      and elegant front-end experiences.
    </div>,
    <div className='mt-8'>
      Outside of tech, I am also interested in the intricacies of political systems and societies, as I also minor in <GradientText text=' Political Science' />.
    </div>,
    <div>
      I'm fortunate to enjoy the companion of two <GradientText text=' cats ' />back at home, <GradientText text=' 六六 (Liu-Liu)' /> and <GradientText text=' 小七 (Xiao-Qi)' />, who will be thrilled if you could pay a visit by clicking the&nbsp;
      <span
        onMouseEnter={() => onButtonHover(true)}
        onMouseLeave={() => onButtonHover(false)}
        className='underline underline-offset-2'
      >button</span> at the bottom right corner :D
    </div>`