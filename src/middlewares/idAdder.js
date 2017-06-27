import { ADD_COMMENT } from '../constants.js'

export default store => next => action => {
	if (action.type === ADD_COMMENT) {
		action.payload.id = (Math.random() * 1e9).toString(32)
	}
	next(action)
}