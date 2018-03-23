import * as React from 'react'

const baseStyleSouth = {
  gridArea: 'south',
  backgroundColor: 'blue',
  height: '100px',
}

const gridArea = 'south'

const southFunc = () => {
  return (
    <>
      <div style={baseStyleSouth}>
        I am the doormat of the site. It sounds horrible but i am happy. Trust
        me! :D
      </div>
    </>
  )
}

const South = Object.assign(southFunc, { gridArea })

export default South
