import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

const articlesMap = defaultArticles.reduce((acc, article) => {
    acc[article.id] = article;
    return acc;
}, {})

export default (articleState = articlesMap, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE: return articleState.filter(article => article.id !== payload.id)
        case ADD_COMMENT: return {
            ...articleState,
            [payload.articleId]: {
                ...articleState[payload.articleId],
                comments: articleState[payload.articleId].comments.concat(payload.id)
			}
        }
    }

    return articleState
}