import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './addFormComment.css';

class AddCommentForm extends Component {
	state = {
		name: undefined,
		comment: undefined
	}

	submitHandler = (e)=> {
		e.preventDefault();
	}

	changeNameHandler = (e) => {
		this.setState({name: e.target.value})
	}

	changeCommentHandler = (e) => {
		this.setState({comment: e.target.value})
	}

	render() {
		const isNameValid = this.state.name && this.state.name.length > 5 && this.state.name.length < 15;
		const isCommentValid = this.state.comment && this.state.comment.length > 20 && this.state.comment.length < 50;
		return (
			<form className="addFormComments" onSubmit={this.submitHandler}>
				<input
					type="text"
					placeholder="name"
					value={this.state.name}
					onChange={this.changeNameHandler}
					className={!isNameValid ? 'invalid' : ''}
				/>
				<textarea
					placeholder="comment"
					value={this.state.comment}
					onChange={this.changeCommentHandler}
					className={!isCommentValid ? 'invalid' : ''}
				/>
				<button type="submit"> Send </button>
			</form>
		);
	}
}

AddCommentForm.propTypes = {};
AddCommentForm.defaultProps = {};

export default AddCommentForm;
