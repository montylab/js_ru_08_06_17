import {DELETE_ARTICLE, INCREMENT, FILTER_BY_SELECT, FILTER_BY_DATE} from '../constants'

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

export function filterByDateRange(date) {
	return {
		type: FILTER_BY_DATE,
		payload: date
	}
}