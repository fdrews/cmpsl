import * as React from 'react'
import PropTypes from 'prop-types'

import { merge } from 'lodash'

const baseStyleLayout = {
  display: 'grid',
  height: '100vh',
}

const northSouthWestGrid = {
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateColumns: 'auto 1fr',
  gridTemplateAreas: '"north north" "west main" "south south"',
}

export default function Layout({ children }) {
  const numElements = React.Children.forEach(children, (child, key) => {
    console.log('child: ', child)
  })

  return (
    <div style={merge(baseStyleLayout, northSouthWestGrid)}>{children}</div>
  )
}
