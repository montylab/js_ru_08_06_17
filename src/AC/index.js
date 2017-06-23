import {DELETE_ARTICLE, INCREMENT, FILTER_BY_SELECT} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
	return {
		type: DELETE_ARTICLE,
		payload: { id }
	}
}

export function filterBySelected(fields) {
	return {
		type: FILTER_BY_SELECT,
		payload: fields
	}
}