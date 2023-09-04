import * as React from 'react'
import { HomePage } from '~/pages'


interface IRoute {
  path: string
  private?: boolean
  component: React.FC
}

const routes: IRoute[] = [
  {
    path: '/',
    component: HomePage
  }
]

export default routes
