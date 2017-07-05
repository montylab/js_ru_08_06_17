import {ADD_COMMENT, LOAD_ALL_COMMENTS, LOAD_COMMENT, START, SUCCESS} from '../constants'
import {arrToMap} from '../helpers'

import {Record, OrderedMap} from 'immutable'

//const commentsMap = arrToMap(defaulComments)

const CommentRecord = Record({
	id: null,
	text: null,
	user: null
})

const ReducerState = Record({
	loading: false,
	loaded: false,
	entities: new OrderedMap({})
})

const defaultState = new ReducerState()


export default (commentsState = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            return {...commentsState, [randomId]: payload.comment}

		case LOAD_ALL_COMMENTS + START:
			return commentsState.set('loading', true)

		case LOAD_ALL_COMMENTS + SUCCESS:
			return commentsState
				.set('entities', arrToMap(payload.response.records, CommentRecord))
				.set('loading', false)
				.set('loaded', true)
	}

    return commentsState
}