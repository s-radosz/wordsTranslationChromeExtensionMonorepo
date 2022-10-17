import { createStore, compose } from 'redux'
import reducer from './reducer'

const composeEnhancer =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

// const composeEnhancer = compose;

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    composeEnhancer(),
    // applyMiddleware(logger)
  )
  return store
}
