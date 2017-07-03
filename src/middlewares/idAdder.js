import { ADD_COMMENT } from '../constants.js'

export default store => next => action => {
	//через мидлвары будут проходить все экшины, суть в том, что делать их нужно максимально реюзабильными. Не завязывайся на один экшин
	if (action.type === ADD_COMMENT) {
		action.payload.id = (Math.random() * 1e9).toString(32)
	}
	next(action)
}
