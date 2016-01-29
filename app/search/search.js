import React from 'react';
import {eventManager} from '../core/event-manager';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        // Set initial sate
        this.state = {
            searchQuery: '',
            isActive: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    componentDidMount() {
        this.state.searchQuery = this.props.searchQuery;
        this.state.isActive = this.props.isActive;
    }

    handleChange(e) {
        this.setState({searchQuery: e.target.value})
        eventManager.publish('searchUpdate', e.target.value);
    }

    handleFocus() {
        this.setState({isActive: true});
        //update the filter value
    }

    handleBlur() {
        this.setState({isActive: false});
        //update the route
    }

    render() {
        return (
            <div className="parks-search">
                <input
                    type="search"
                    placeholder="Search..."
                    className={`parks-search__input ${(this.state.isActive) ? 'is-active': 'not-active'}`}
                    value={this.props.searchQuery}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}
