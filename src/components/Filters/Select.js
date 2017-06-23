import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterBySelected} from './../../AC'

import 'react-select/dist/react-select.css'


class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => {
        const {filterBySelected} = this.props;
		filterBySelected(selected)
    }

    render() {
        const { articles, selected } = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state=>({
    articles: state.articles,
    selected: state.filters.select
}), {filterBySelected})(SelectFilter)