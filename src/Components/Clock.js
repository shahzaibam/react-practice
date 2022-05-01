import React from 'react'

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getTime();
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

                {hours == 24 ? 0 : (hours > 12) ? hours : hours - 12}
                :
                {minutes > 9 ? minutes : `0${minutes}`}
                :
                {seconds > 9 ? seconds : `0${seconds}`}


            </div>
        )
    }

}


export default Clock