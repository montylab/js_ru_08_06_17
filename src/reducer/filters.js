import {FILTER_BY_SELECT, FILTER_BY_DATE} from '../constants'

const defaultState = {
    select: [],
    date: {
		from: null,
        to: null
    }
}

export default (state = defaultState, action) => {
    const {type} = action

	switch (type) {
		case FILTER_BY_SELECT: return Object.assign({}, state, {select: action.payload})
		case FILTER_BY_DATE: return Object.assign({}, state, {date: {
			from: action.payload.from,
			to: action.payload.to
        }})
	}

    return state
}