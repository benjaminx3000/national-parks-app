import {eventManager} from '../core/event-manager';
import ParksListItem from './parks-list__item';

export default class ParkItem extends ParksListItem {
    constructor(props) {
        super(props);
    }

    handleSelect() {
        super.handleSelect();
        eventManager.publish('parkSelect', this.props.data);
        eventManager.publish('parkDeSelect');
        eventManager.subscribe('parkDeSelect', this.deSelect);
    }

    deSelect() {
        super.handleSelect();
        eventManager.unSubscribe('parkDeSelect', this.deSelect);
    }
}
