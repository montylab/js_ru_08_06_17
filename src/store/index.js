import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import idAdder from '../middlewares/idAdder'

const enhancer = applyMiddleware(logger, idAdder)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store