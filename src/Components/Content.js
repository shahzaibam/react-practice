import React from 'react'
import '../App.css'
import { activities } from './activities';

const Content = (props) => {

    const activities = props;

    return (

        <div className="content">
            {/* Timeline item */}
            {activities.map((activity) => {
                return (
                    <div className="item">
                        <div className="avatar">
                            <img className="avatarimg" src={activity.user.avatar}
                                height="40px" width="40px" />

                        </div>

                        <div className="avatarName info">{activity.user.name}</div>

                        <div className="time info">
                            {activity.timestamp}
                        </div>

                        <div className="action info">
                            {activity.text}
                        </div>

                        <div className="commentCount info">
                            {activity.comments.length}
                        </div>
                    </div>
                )
            })}

        </div>

    )
}

export default Content