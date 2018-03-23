import * as React from 'react'
import { merge } from 'lodash'

const baseStyleEast = {
  backgroundColor: 'lightblue',
}

const gridArea = 'east'

const eastFunc = () => {
  return (
    <>
      <div style={merge(baseStyleEast, { gridArea })}>
        Do u know the GDR? There`s no connection between me and the GDR . I am a
        Sidebar on the left site. Keep it in your mind.
      </div>
    </>
  )
}
const East = Object.assign(eastFunc, { gridArea })
export default East
