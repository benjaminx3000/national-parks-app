'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppBar from 'material-ui/lib/app-bar';
import ParksList from './parks-list/parks-list';

injectTapEventPlugin();

ReactDom.render(
    (
        <div className="national-parks-app">
            <AppBar title="National Parks" className="np-header"/>
            <ParksList />
        </div>
    ),
    document.querySelector('#NationalParksApp')
);
