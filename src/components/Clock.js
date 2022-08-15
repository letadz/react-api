import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        // call tick() method every 1 second
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    // componentDidUpdate() {
    //     console.log("Component updated")
    // }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // setState to update state object
        this.setState( { date: new Date() } );
    }

    render() {
        return (
            <div className='container'>
                <h1>{ this.state.date.toLocaleTimeString() }</h1>
            </div>
        );
    }
}

export default Clock;