import React from 'react'

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getTime();
    }

    componentDidMount() {
        this.setTimer();
    }



    getTime() {
        const currentTime = new Date();
        return {
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            ampm: currentTime.hours >= 12 ? "pm" : "am"

        }
    }


    render() {
        const {hours, minutes, seconds, ampm} = this.state
        return (
            <div className='clock'>

                {hours == 0 ? 12 : (hours > 12) ? hours - 12 : hours}
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