import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import {connect} from 'react-redux'
import {loadAllComments} from './../AC'
import Loader from './Loader'
import { commentSelectorFactory } from '../selectors/index'

class CommentList extends React.Component {

	componentWillReceiveProps({isOpen, loadComment, article, loading, loaded}) {
		if (isOpen && !this.props.isOpen && !loading && !loaded) {
			this.props.loadAllComments()
        }
	}

	render = () => {
		const {article, isOpen, toggleOpen, comments, loading} = this.props

		const text = isOpen ? 'hide comments' : 'show comments'
		return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
				{getBody({article, isOpen, comments, loading})}
            </div>
		)
	}
}

CommentList.propTypes = {
    comments: PropTypes.array,

    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

function getBody({article: {id}, isOpen, comments, loading}) {
    if (!isOpen) return null

	if (loading) return (
		<Loader />
	)

	if (!comments.length) return (
        <div>
            <p>No comments yet</p>
            <CommentForm articleId = {id} />
        </div>
	)


    return (
        <div>
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment} id={comment.id} /></li>)}
            </ul>
            <CommentForm articleId = {id} />
        </div>
    )
}

export default connect((state, {article}) => {
	let comments = [];
    if (state.comments.loaded) {
        comments = article.comments.reduce((acc, id) => {
            const com = state.comments.entities.get(id)//
            com && acc.push(com)
            return acc
        }, [])
        console.log(comments)
	}

	return {
		comments,
        loading: state.comments.loading,
        loaded: state.comments.loaded
    }
}, {loadAllComments})(toggleOpen(CommentList))