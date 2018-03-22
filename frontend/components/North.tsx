import * as React from 'react'

const baseStyleNorth = {
  gridArea: 'north',
  height: '100px',
  backgroundColor: 'darkgreen',
}

export default function North() {
  return (
    <>
      <div style={baseStyleNorth}>
        I am the head of the site. Do u know what i mean?
      </div>
    </>
  )
}
