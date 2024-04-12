import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

import styles from './styles.module.css'

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

export default function App() {
  const [open, toggle] = useState(false)
  const [{ freq, factor, scale, opacity }] = useSpring(
    () => ({
      reverse: open,
      from: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
      to: { factor: 150, opacity: 1, scale: 2, freq: '0.0, 0.0' },
      config: { duration: 3000 },
    }),
    [open]
  )
  return (
    <div className={styles.container} onClick={() => toggle(!open)}>
      <animated.svg className={styles.svg} style={{ scale, opacity }} viewBox="0 0 10000 5000">
        <defs>
          <filter id="water">
            <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="6" result="TURB" seed="8" />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={factor}
            />
          </filter>
        </defs>
        <g filter="url(#water)">
          <text
          id="welcomeText"
          x="50%"
          y="90%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="currentColor"
          fontWeight="bold"
          fontSize="50rem"
        >
          Welcome to My Portfolio

          </text>
          
        </g>
      </animated.svg>
    </div>
  )
}