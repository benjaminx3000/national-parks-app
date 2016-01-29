import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import {_} from 'underscore';

import {httpService} from '../core/api';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    getParksData() {
        httpService.get('data/national-parks.json', (data) => {
            data = _.sortBy (data, 'State');
            data = _.groupBy(data, 'State');
            this.setState({data: data})
        });
    }

    componentDidMount() {
        this.getParksData();
    }

    render() {
        var parks = Object.keys(this.state.data).map(
            (key) => {
                var stateName = key;
                console.log(key, this.state.data[key]);
                var parks = this.state.data[key].map(park => {
                    return (
                        <ListItem
                            className="parks-list__item"
                            primaryText="{park.Name}"
                        />
                    )
                });
                return (
                    <ListItem
                        className="parks-list__item"
                        primaryText={stateName}
                        nestedItems={parks}
                    />
                )
            });
        return (
            <List className="parks-list">
                {parks}
            </List>
        )
    }
}
