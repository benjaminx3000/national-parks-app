import React from 'react';
import {eventManager} from '../core/event-manager';
import ListItem from './list-item';

export default class ParksListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.deSelect = this.deSelect.bind(this);
    }

    handleSelect() {
        this.setState({isActive: !this.state.isActive});
    }

    deSelect() {
        this.setState({isActive: false});
    }

    render() {
        return (
            <ListItem
                label={this.props.label}
                children={this.props.children}
                isActive={this.state.isActive}
                handleSelect={this.handleSelect}
            />
        );
    }
}
