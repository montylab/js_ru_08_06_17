import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
//лучше с маленькой буквы
import Accordeon from './../decorators/accordeon'

const ArticleList = (props) => {
    const articleElements = props.articles.map(article => <li key={article.id}>
        <Article
            article = {article}
            isOpen = {article.id === props.openId}
            toggleOpen = {props.openItem.bind(null, article.id)}
        />
    </li>)

    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticleList.propTypes = {
	articles: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		text: PropTypes.string
    })).isRequired
}

export default Accordeon (ArticleList);
