import React from 'react';
import Paper from 'material-ui/lib/paper';

export default class ParkDetail extends React.Component {
    constructor(props) {
        super(props);

        //set initial state
        this.sate = {
            data: {}
        }
    }

    render() {
        return (
            <Paper className="park-detail">
                <header className="park-detail__header">Park Name</header>
                <div className="park-detail__body">
                    <ul className="park-detail__meta u-detail-list">
                        <li>Blah: foo</li>
                        <li>Blah: foo</li>
                        <li>Blah: foo</li>
                    </ul>
                </div>
                <footer className="park-detail__footer"></footer>
            </Paper>
        )
    }
}
