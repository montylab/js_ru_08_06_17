import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'
import {filterByDateRange} from './../../AC'
import {connect} from 'react-redux'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    static PropTypes: {
        from: PropTypes.date,
        to: PropTypes.date
    }

    handleDayClick = (day) => {
        this.props.filterByDateRange(DateUtils.addDayToRange(day, this.props))
    }

    render() {
        const { from, to } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }
}

export default connect(state => ({
    from: state.filters.date.from,
    to: state.filters.date.to
}), { filterByDateRange })(DateRange)