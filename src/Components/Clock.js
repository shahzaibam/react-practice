import React from 'react'

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getTime();
    }

    componentDidMount() {
        this.setTimer();
    }

    setTimer() {
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(this.updateClock.bind(this), 1000);
    }

    updateClock() {
        this.setState(this.getTime, this.setTimer);
    }

    getTime() {
        const currentTime = new Date();
        return {
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            ampm: currentTime.hours >= 12 ? "am" : "pm"

        }
    }


    render() {
        const {hours, minutes, seconds, ampm} = this.state
        return (
            <div className='clock' style={{backgroundColor: "blue", color: "white", width: "100px"  }}>

                {hours == 24 ? 0 : (hours > 12) ? hours : hours - 12}
                :
                {minutes > 9 ? minutes : `0${minutes}`}
                :
                {seconds > 9 ? seconds : `0${seconds}`}

                {ampm}


            </div>
        )
    }

}


export default Clock