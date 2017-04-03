/**
 * Create the store and add middleware for redux application
 * @module create-store
 */

import { applyMiddleware, createStore } from 'redux'
import makeRootReducer from './modules/reducer'


export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = []
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    const { createLogger } = require('redux-logger')
    middleware.push(createLogger())
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    applyMiddleware(...middleware)
  )
  store.asyncReducers = {}

  return store
}
