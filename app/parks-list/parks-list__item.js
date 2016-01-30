import React from 'react';
export default class ParksListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            label: "Default Text",
            isActive: false
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect() {
        this.setState({isActive: !this.state.isActive});
    }

    render() {
        return (
            <li className="parks-list__item">
                <div className={`parks-list__label ${this.state.isActive? 'is-active' : ''}`} tabIndex="-1" onClick={this.handleSelect}>{this.props.label}</div>
                <ul className="parks-list">{this.props.childItems}</ul>
            </li>
        );
    }
}
