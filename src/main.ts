import './index.css'
import routes from './routes'
import vitedge from 'vitedge'
import App from './App'

export default vitedge(
  App,
  { routes },
  ({ app, router, isClient, initialState }) => {
    // Custom setup hook.
    // E.g. set initialState in a store, install plugins, etc.
  }
)
