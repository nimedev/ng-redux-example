/**
 * @module reducer
 * @member redux/modules
 */

import { combineReducers } from 'redux'
import counter from './counter'

const makeRootReducer = asyncReducers => (
  combineReducers({
    counter,
    ...asyncReducers
  })
)

export const injectReducer = (store, { key, reducer }) => {
  if ({}.hasOwnProperty.call(store.asyncReducers, key)) {
    return
  }

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
