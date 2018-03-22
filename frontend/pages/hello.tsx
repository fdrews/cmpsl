import * as React from 'react'
import { Page } from '@seagull/core'

import Layout from '../components/Layout'
import North from '../components/North'
import South from '../components/South'
import West from '../components/West'
import Main from '../components/Main'

export default class HelloPage extends Page<{}, {}> {
  /**
   * the url path this page will be mounted on
   */
  path: string = '/'

  /**
   * outputs the HTML of this Page
   */
  render() {
    return (
      <div>
        <Layout>
          <North />
          <West />
          <Main />
          <South />
        </Layout>
      </div>
    )
  }
}
