import React from 'react'

const Clock = () => {

    const currentTime = newDate()
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()
    const ampm = hours >= 12 ? "pm" : "am"



  return (
    <div className='clock'>

    {hours == 0 ? 12 : (hours > 12) ? hours - 12 : hours}
    :
    {minutes > 9 ? minutes : `0${minutes}`}
    :
    {seconds > 9 ? seconds : `0${seconds}`}

    
    </div>
  )
}

export default Clock