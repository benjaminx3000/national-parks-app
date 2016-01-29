import React from 'react';
import {_} from 'underscore';

import ParksListItem from './parks-list__item';
import {httpService} from '../core/api';
import {filter} from '../core/filter';
import {eventManager} from '../core/event-manager';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        // Set initial state
        this.state = {
            data: [],
            sortBy: 'State',
            sortAsc: true,
            searchQuery: ''
        };

        this.handleSearch = this.handleSearch.bind(this);

    }

    getParksData() {
        httpService.get('data/national-parks.json', (data) => {
            if (this.state.searchQuery !== '') {
                data = filter.filter(data, ['Name', 'State'], this.state.searchQuery);
            }
            data = filter.sortBy(data, this.state.sortBy, this.state.sortAsc);
            data = _.groupBy(data, this.state.sortBy);
            console.log(data);
            this.setState({data: data})
        });
    }

    handleSearch(query) {
        this.setState({searchQuery: query});
        this.getParksData();
    }

    componentDidMount() {
        eventManager.subscribe('searchUpdate', this.handleSearch);
        this.getParksData();
    }

    render() {
        var parks = Object.keys(this.state.data).map(
            (key) => {
                var stateName = key;
                var parks = this.state.data[key].map(park => {
                    return (
                        <ParksListItem label={park.Name} />
                    )
                });
                return <ParksListItem label={stateName} childItems={parks} />;
            });
        return (

            <ul className={`parks-list ${(this.state.searchQuery !== '') ? 'is-filtered': ''}`} >
                {parks}
            </ul>
        )
    }
}
