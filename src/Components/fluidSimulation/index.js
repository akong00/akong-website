import React, { useRef } from 'react'
import { Canvas } from '@react-vertex/core'
// import { useMeasure } from '@react-vertex/dom-hooks'
import Simulation from './Simulation'
// import { color } from './customHooks/usePrograms/shaders';

import './fluidSimulation.scss'

const attrs = {
    alpha: true,
    depth: false,
    stencil: false,
    antialias: false,
    preserveDrawingBuffer: false,
}

const style = {
    borderRadius: 0,
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
}

function FluidSimulation(props) {
    const container = useRef()
    // colorTheme is an array of any combination of r, o, y, g, b, v, w (red, orange, yellow, green, blue, violet, white)
    // add more of one character for more weight
    // example: ['r','r','g','v']
    const { colorTheme, splatRadiusMultiplier, width, height, customOffsets } = props

    return (
      <div className='fluid-simulation'>
        <div ref={container} style={{width: width, height: height}}>
          {width ? (
            <Canvas
              webgl2
              width={width}
              height={height}
              canvasStyle={style}
              contextAttrs={attrs}
            >
              <Simulation colorTheme={colorTheme} splatRadiusMultiplier={splatRadiusMultiplier} customOffsets={customOffsets}/>
            </Canvas>
          ) : null}
        </div>
      </div>
    )
  }


export default FluidSimulation
