import React from 'react';
import {eventManager} from '../core/event-manager';
import ParksList from './parks-list';

import ParksListItem from './parks-list__item';
import ParkItem from './park-item';

export default class StateItem extends ParksListItem {
    constructor(props) {
        super(props);
    }

    handleSelect() {
        super.handleSelect();
        eventManager.publish('stateDeSelect');
        eventManager.subscribe('stateDeSelect', this.deSelect);
    }

    deSelect() {
        super.handleSelect();
        eventManager.unSubscribe('stateDeSelect', this.deSelect);
    }
}
