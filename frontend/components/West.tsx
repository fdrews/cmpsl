import * as React from 'react'

const baseStyleWest = {
  gridArea: 'west',
  backgroundColor: 'red',
  width: '200px',
}

const gridArea = 'west'

const westFunc = () => {
  return (
    <>
      <div style={baseStyleWest}>
        I am the opposite of the east component. So for u. I am a sidebar on the
        right side.
      </div>
    </>
  )
}
const West = Object.assign(westFunc, { gridArea })
export default West
