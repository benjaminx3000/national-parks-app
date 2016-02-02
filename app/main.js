// TODO: integrate routing for a stateful application.

'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppBar from 'material-ui/lib/app-bar';
import Search from './search/search';
import ParksList from './parks-list/parks-list';
import ParkDetail from './park-detail/park-detail';

injectTapEventPlugin();

ReactDom.render(
    (
        <div className="national-parks-app">
            <AppBar
                title="National Parks"
                className="np-header"
                iconElementLeft={<span/>}
                backgroundColor="#D97E00"
            />
            <div className="park-detail-container">
                <ParkDetail />
            </div>
            <div className="parks-list-container">
                <Search />
                <ParksList />
            </div>
        </div>
    ),
    document.querySelector('#NationalParksApp')
);
