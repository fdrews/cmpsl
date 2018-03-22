import { API, Request, Response } from '@seagull/core'
import { Routing, Document } from '@seagull/core'
import { renderToString } from 'react-dom/server'
import { getStyles } from 'typestyle'

export default class Frontent extends API {
  /**
   * The URL path where this API will be located. Skip for private functions like cronjobs. Example: '/greetings/{name}'
   */
  static path: string = '/*'
  /**
   * This is the HTTP method / verb for the API. Defaults to 'GET'
   */
  static method: string = 'GET'

  /**
   * This handle function executes your code. Return one of the following method invocations: 'text', 'json', 'redirect', 'missing', 'error'
   */
  async handle(request: Request): Promise<Response> {
    const appRouter = new Routing(true, request)
    const page = appRouter.initialMatchedPage()
    if (page && typeof page.componentDidMount === 'function') {
      await page.componentDidMount()
    }
    const content = renderToString(appRouter.load())
    const html = renderToString(Document({ content }))
    return this.html(html)
  }
}
