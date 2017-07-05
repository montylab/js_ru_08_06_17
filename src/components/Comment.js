import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {commentSelectorFactory} from '../selectors'


class Comment extends React.Component {
    render = () => {
        const { text, user } = this.props.comment

        return (
            <div>
                <p>{text} <b>by {user}</b></p>
            </div>
        )
	}
}

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    //from connect
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired,
}

const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory()

    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        }
    }
}

export default connect(mapStateToProps)(Comment)