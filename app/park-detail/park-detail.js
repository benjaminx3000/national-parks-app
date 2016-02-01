import React from 'react';
import Paper from 'material-ui/lib/paper';

export default class ParkDetail extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Paper className="park-detail">
                <header className="park-detail__header">
                    <h1>Park Name</h1>
                </header>
                <div className="park-detail__body">
                    <dl className="park-detail__meta u-detail-list">
                        <dt>Established:</dt>
                    </dl>
                </div>
                <footer className="park-detail__footer"></footer>
            </Paper>
        )
    }
}
