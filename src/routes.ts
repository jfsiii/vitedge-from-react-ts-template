import { createElement } from 'react'

export default [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: () => import('./pages/Home'),
  },
  {
    path: '/users/:id',
    exact: true,
    component: () => import('./pages/users/[id]'),
    meta: {
      propsGetter: 'users/[id]', // works for .js; not .ts
    },
  }
].map(({ component: fn, ...route }) => {
  let component = null
  return {
    ...route,
    component: (props) => {
      if (!component) {
        const loadingComponent = fn().then(({ default: page }) => {
          component = page
        })
        // Suspense will re-render when component is ready
        throw loadingComponent
      }

      return createElement(component, props)
    },
  }
})
