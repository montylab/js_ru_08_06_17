import React, {Component} from 'react'

import Comment from './Comment'

export default class Comments extends Component {
	state = {
		isVisible: false
	}

	toggleHandler = () => {
		this.setState({
			isVisible: !this.state.isVisible
		})
	}

	render() {
		//очень большая вложенность с проверками выходит, попробуй упростить. И не старайся не писать проверки внутри JSX - не читабельно
		return this.props.comments && (
			<div>
				<button type="button" onClick={this.toggleHandler}>{this.state.isVisible ? 'Hide Comments' : 'Show Comments'}</button>

				{this.state.isVisible && (
					<ul>
						{this.props.comments.map((comm) => <Comment comment={comm} key={comm.id} />)};
					</ul>
				)}


			</div>
		) || null
	}
}
