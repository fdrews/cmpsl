import * as React from 'react'
import PropTypes from 'prop-types'

import { merge } from 'lodash'

const baseStyleLayout = {
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateColumns: 'auto 1fr auto',
  height: '100vh',
}

/*const northGrid = {
  gridTemplateAreas: '"north north" "main main" "main main"',
}

const northSouthGrid = {
  gridTemplateAreas: '"north north" "main main" "south south"',
}

const northWestSouthGrid = {
  gridTemplateAreas: '"north north" "west main" "south south"',
}*/

const Layout = ({ children }) => {
  let gridLayout = {}
  const numChilds = React.Children.count(children)
  return <div style={merge(baseStyleLayout, gridLayout)}>{children}</div>
}

function setGridLayout(main?, north?, east?, south?, west?) {}

export default Layout
