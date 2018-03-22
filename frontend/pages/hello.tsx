import * as React from 'react'
import { Page } from '@seagull/core'

import Layout from '../components/Layout'
import Header from '../components/Header'

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
          <div>BLUBB</div>
          <Header />
        </Layout>
      </div>
    )
  }
}
