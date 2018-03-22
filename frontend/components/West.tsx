import * as React from 'react'

const baseStyleWest = {
  gridArea: 'west',
  backgroundColor: 'red',
}

export default function West() {
  return (
    <>
      <div style={baseStyleWest}>
        I am the opposite of the east component. So for u. I am a sidebar on the
        right side.
      </div>
    </>
  )
}
