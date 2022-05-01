import React from 'react'

const Clock = () => {

    const currentTime = new Date()
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()
    const ampm = hours >= 12 ? "pm" : "am"



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

export default Clock