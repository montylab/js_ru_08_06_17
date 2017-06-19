import React, {Component as ReactComponent} from 'react'

//WrappedComponent я называл чтоб легче понять было. Лучше выбирай более значущее название
export default (OriginalComponent) => class WrappedAccordeonComponent extends ReactComponent {
    state = {
        openId: null
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} openItem={this.openItem} openId={this.state.openId}/>
    }

    openItem = (id) => {
        this.setState({
            openId: this.state.openId === id ? null : id
        })
    }
}
