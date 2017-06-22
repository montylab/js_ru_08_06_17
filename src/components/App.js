import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import moment  from 'moment';
import DayPicker, { DateUtils }  from 'react-day-picker';
import 'react-day-picker/lib/style.css';

//компонент-монстр. Вынеси календарь и Select в отдельные компоненты
class App extends Component {
    static propTypes = {

    };

    state = {
        selection: null,
        from: null,
        to: null
    }

	handleDayClick = (day) => {
		const range = DateUtils.addDayToRange(day, this.state);
		this.setState(range);
    }

    render() {
        const {articles} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

		const { from, to } = this.state;

        return (
            <div>
                <UserForm />
                <Select options = {options} value = {this.state.selection} onChange = {this.changeSelection} multi />
                <div>
                    <DayPicker
                        selectedDays={[from, { from, to }]}
                        onDayClick={this.handleDayClick}
                        fixedWeeks
                    />
					{!from && !to && <p>Please select the <strong>first day</strong>.</p>}
					{from && !to && <p>Please select the <strong>last day</strong>.</p>}
					{from &&
					to &&
                    <p>
                        You chose from
						{' '}
						{moment(from).format('L')}
						{' '}
                        to
						{' '}
						{moment(to).format('L')}
                        .
						{' '}<a href="." onClick={this.handleResetClick}>Reset</a>
                    </p>}
                </div>
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
                <ArticlesChart articles = {articles} />
            </div>
        )
    }

    changeSelection = selection => this.setState({ selection })
}

export default App
