import * as React from 'react'
import { merge } from 'lodash'

const baseStyleMain = {
  backgroundColor: 'orange',
}

const gridArea = 'main'

const mainFunc = () => {
  return (
    <>
      <div style={merge(baseStyleMain, { gridArea })}>
        I am responsable for the content. Do what u want to do!
      </div>
    </>
  )
}

const Main = Object.assign(mainFunc, { gridArea })

export default Main
