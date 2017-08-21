import { createStore } from 'redux'
import setShowModal from '../reducers/index'

export default function configureStore(initialState) {
  const store = createStore(setShowModal, initialState)

  return store
}