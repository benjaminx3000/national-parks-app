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
            sortAsc: true,
            searching: false
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

    filterData(query) {
        var data = this.state.data;
        if (query) {
            this.setState({searching: true})
            data = filter.filter(data, ['Name', 'State'], query);
            data = filter.sortBy(data, 'relevance', this.state.sortAsc);
        } else {
            this.setState({searching: false});
            data = filter.sortBy(data, 'State', this.state.sortAsc);
        }
        data = _.groupBy(data, 'State');
        this.setState({filteredData: data});
    }

    handleSearch(query) {
        this.filterData(query.trim());
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
            <ul className={`parks-list ${(this.state.searching) ? 'is-filtered': ''}`} >
                {parks}
            </ul>
        )
    }
}
