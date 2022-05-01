import React from 'react'

const Clock = () => {

    const currentTime = newDate()
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()
    const ampm = hours >= 12 ? "pm" : "am"



  return (
    <div>Clock</div>
  )
}

export default Clock