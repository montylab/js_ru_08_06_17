import {
	DELETE_ARTICLE, INCREMENT, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_COMMENT,
	LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS, FAIL, LOAD_ALL_COMMENTS, LOAD_COMMENT
} from '../constants'

export function increment() {
	return {
		type: INCREMENT
	}
}

export function deleteArticle(id) {
	return {
		type: DELETE_ARTICLE,
		payload: {id}
	}
}

export function changeDateRange(dateRange) {
	return {
		type: CHANGE_DATE_RANGE,
		payload: {dateRange}
	}
}

export function changeSelection(selected) {
	return {
		type: CHANGE_SELECTION,
		payload: {selected}
	}
}

export function addComment(comment, articleId) {
	return {
		type: ADD_COMMENT,
		payload: {comment, articleId},
		generateId: true
	}
}

//зачем all comments, надо было для одной статьи. В начале показывал api для этого
export function loadAllComments() {
	return (dispatch) => {
		dispatch({
			type: LOAD_ALL_COMMENTS + START,
		})

		setTimeout(() => {
			fetch('/api/comment')
				.then(res => res.json())
				.then(response => dispatch({
					type: LOAD_ALL_COMMENTS + SUCCESS,
					payload: {response}
				}))
				.catch(error => dispatch({
					type: LOAD_ALL_COMMENTS + FAIL,
					payload: {error}
				}))
		}, 500)
	}
}

export function loadAllArticles() {
	return {
		type: LOAD_ALL_ARTICLES,
		callAPI: '/api/article'
	}
}

export function loadArticle(id) {
	return (dispatch) => {
		dispatch({
			type: LOAD_ARTICLE + START,
			payload: {id}
		})

		setTimeout(() => {
			fetch(`/api/article/${id}`)
				.then(res => res.json())
				.then(response => dispatch({
					type: LOAD_ARTICLE + SUCCESS,
					payload: {id, response}
				}))
				.catch(error => dispatch({
					type: LOAD_ARTICLE + FAIL,
					payload: {id, error}
				}))
		}, 100)
	}
}

/*
 export function loadArticle(id) {
 return {
 type: LOAD_ARTICLE,
 callAPI: `/api/article/${id}`
 }
 }
 */
