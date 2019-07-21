import React, { Component, useRef } from 'react'
import { Canvas } from '@react-vertex/core'
import { useMeasure } from '@react-vertex/dom-hooks'
import Simulation from './Simulation'

const attrs = {
    alpha: true,
    depth: false,
    stencil: false,
    antialias: false,
    preserveDrawingBuffer: false,
}

const style = {
    borderRadius: 0,
    cursor: 'default',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
}

function FluidSimulation() {
    const container = useRef()
    const { width } = useMeasure(container)
    const height = 300

    return (
      <div className='fluid-simulation'>
        <div ref={container}>
          {width ? (
            <Canvas
              webgl2
              width={width}
              height={height}
              canvasStyle={style}
              contextAttrs={attrs}
            >
              <Simulation />
            </Canvas>
          ) : null}
        </div>
      </div>
    )
  }


export default FluidSimulation
