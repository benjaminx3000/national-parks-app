import React from 'react';
import {_} from 'underscore';

import {httpService} from '../core/api';
import {filter} from '../core/filter';
import {eventManager} from '../core/event-manager';
import StateItem from './state-item';
import ParkItem from './park-item';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        // Set initial state
        this.state = {
            data: [],
            filteredData: [],
            sortBy: 'State',
            sortAsc: true,
            searchQuery: ''
        };

        this.handleSearch = this.handleSearch.bind(this);

    }

    getParksData() {
        // TODO: migrate data set to mongodb to avoid unique key error
        httpService.get('data/national-parks.json', (data) => {
            this.setState({data: data});
            this.filterData();
        });
    }

    filterData() {
        var data = this.state.data;
        if (this.state.searchQuery !== '') {
            data = filter.filter(data, ['Name', 'State'], this.state.searchQuery);
            data = filter.sortBy(data, 'relevance', this.state.sortAsc);
        } else {
            data = filter.sortBy(data, this.state.sortBy, this.state.sortAsc);
        }
        data = _.groupBy(data, this.state.sortBy);
        this.setState({filteredData: data});
    }

    handleSearch(query) {
        this.setState({searchQuery: query});
        this.filterData();
    }

    componentDidMount() {
        eventManager.subscribe('searchUpdate', this.handleSearch);
        this.getParksData();
    }

    render() {
        var parks = Object.keys(this.state.filteredData).map(
            (key) => {
                var stateName = key;
                var parks = this.state.filteredData[key].map(park => {
                    return (
                        <ParkItem label={park.Name} data={park}/>
                    )
                });
                return <StateItem label={stateName} children={parks} />;
            });
        return (
            <ul className={`parks-list ${(this.state.searchQuery !== '') ? 'is-filtered': ''}`} >
                {parks}
            </ul>
        )
    }
}
