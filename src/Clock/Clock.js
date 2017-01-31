//Import Dependancies

import React from 'react';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.clock(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    clock() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <span>{this.state.date.toLocaleTimeString()}.</span>
        );
    }
}

export default Clock;