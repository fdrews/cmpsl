import * as React from 'react'
import PropTypes from 'prop-types'

const baseLayout = {
  display: 'grid',
  height: '100vh',
}

export default function Layout({ children }) {
  const numElements = React.Children.forEach(children, (child, key) => {
    console.log('child: ', child)
  })

  return <div style={baseLayout}>replace me!</div>
}
