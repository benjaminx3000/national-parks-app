import React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import {eventManager} from '../core/event-manager';

export default class ParkDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            name: '',
            est: '',
            sq_km: '',
            elevation: '',
            npsUrl: ''
        }

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    show(data) {
        console.log(data);
        this.setState({
            isActive: true,
            name: data.Name,
            est: data.Est_Year,
            sq_km: data.Sq_km,
            elevation: `${data.Minelev_ft}' - ${data.Maxelev_ft}'`,
            npsUrl: data.NPS_URL
        });
    }

    hide() {
        this.setState({
            isActive: false
        })
    }

    componentDidMount() {
        eventManager.subscribe('parkSelect', this.show)
    }

    render() {
        return (
            <div className={`park-detail__background ${this.state.isActive? 'is-active' : ''}`}>
                <Paper className="park-detail">
                    <header className="park-detail__header">
                        <h1>
                            <span clasName="btn" onClick={this.hide}>&times;</span>
                            {this.state.name}
                        </h1>
                    </header>
                    <div className="park-detail__body">
                        <div>
                            <dl className="park-detail__meta u-detail-list">
                                <dt>Established:</dt>
                                    <dd>{this.state.est}</dd>
                                <dt>Square Milage:</dt>
                                    <dd>{this.state.sq_km}</dd>
                                <dt>Elevation:</dt>
                                    <dd>{this.state.elevation}</dd>
                            </dl>
                            {/*
                                TODO: look into additional data from nps
                                http://www.nps.gov/zion/nps-alerts-zion.json
                            */}
                            <RaisedButton
                                linkButton={true}
                                backgroundColor="#D97E00"
                                target="_blank"
                                href={this.state.npsUrl}
                                label="Natiional Parks Service"
                            />
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}
