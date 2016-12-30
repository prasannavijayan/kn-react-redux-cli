import <ClassName> from './container'

export default {
  path: '<RoutePath>',
  name: '<ClassName>',
  component: <ClassName>,
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: <ClassName>, isIndex: true }
  ]
}