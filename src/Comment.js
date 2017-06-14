import React from 'react'

export default (props) => (
	//li сильно уменьшает возможность переиспользовать в будущем, лучше вынести его в Comments
	<li>
		<h3>{props.comment.user}</h3>
		<p>{props.comment.text}</p>
	</li>
)
