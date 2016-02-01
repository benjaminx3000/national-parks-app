import React from 'react';

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="parks-list__item">
                <div
                    className={`parks-list__label ${this.props.isActive? 'is-active' : ''}`}
                    tabIndex="-1"
                    onClick={this.props.handleSelect}
                >
                    {this.props.label}
                </div>
                <ul className="parks-list">
                    {this.props.children}
                </ul>
            </li>
        );
    }
}
