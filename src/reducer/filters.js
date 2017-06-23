import {FILTER_BY_SELECT} from '../constants'

const defaultState = {
    select: [],
    date: {
        min: null,
        max: null
    }
}

export default (state = defaultState, action) => {
    const {type} = action

    switch (type) {
        case FILTER_BY_SELECT: return Object.assign({}, state, {select: action.payload})
    }

    return state
}