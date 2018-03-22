import * as React from 'react'
import PropTypes from 'prop-types'

const baseStyleLayout = {
  display: 'grid',
  height: '100vh',
}

const northWestSouthGrid = {}

export default function Layout({ children }) {
  const numElements = React.Children.forEach(children, (child, key) => {
    console.log('child: ', child)
  })

  return <div style={baseStyleLayout}>replace me!</div>
}
