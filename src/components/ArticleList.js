import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    passFilter = (article) => {
    	const {filters} = this.props

		if (filters.select.length != 0 && filters.select.find(item => item.value == article.id) === undefined) {
			return false
		}

		const date = Date.parse(article.date)
		const {from, to} = filters.date
		if (from && from - date > 0 || to && to - date < 0) {
			return false
		}

		return true
	}

    render() {
        const { articles, openItemId, toggleOpenItem } = this.props
        const articleElements = articles.map(article => {
			if (!this.passFilter(article)) {
				return
			}

			return <li key={article.id}>
				<Article
					article = {article}
					isOpen = {article.id === openItemId}
					toggleOpen = {toggleOpenItem(article.id)}
				/>
			</li>
        })

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    filters: state.filters
}))(accordion(ArticleList))