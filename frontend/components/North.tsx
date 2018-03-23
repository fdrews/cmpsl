import * as React from 'react'
import { merge } from 'lodash'

const baseStyleNorth = {
  height: '100px',
  backgroundColor: 'darkgreen',
}

const gridArea = 'north'
const northFunc = () => {
  return (
    <>
      <div style={merge(baseStyleNorth, { gridArea })}>
        I am the head of the site. Do u know what i mean?
      </div>
    </>
  )
}

const North = Object.assign(northFunc, { gridArea })

export default North
