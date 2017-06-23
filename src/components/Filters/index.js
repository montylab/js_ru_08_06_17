import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'


import {connect} from 'react-redux'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    }

	handleChange = (e) => {
        debugger;
    }

    render() {
        return (
            <div>
                <SelectFilter onChange={this.handleChange}/>
                <DateRange />
            </div>
        )
    }
}

export default connect(state => ({
    articles: state.articles
}))(Filters)