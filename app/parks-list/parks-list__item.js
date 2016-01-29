import React from 'react';
export default class ParksListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            label: "Default Text"
        }
        this.handleSelect = this.handleSelect.bind(null, this.props);
    }

    handleSelect(evt) {
        console.log('select', evt);
    }

    render() {
        return (
            <li className="parks-list__item">
                <div className="parks-list__label" tabIndex="-1" onClick={this.handleSelect}>{this.props.label}</div>
                <ul className="parks-list">{this.props.childItems}</ul>
            </li>
        );
    }
}
