import React from 'react'
import '../App.css'

const Header = (props) => {
    return (
        <div className='container'>

            <div className="navbar">
                <div className="icon">
                    <i class="fa-solid fa-bars"></i>
                </div>

                <div className="title">
                    {props.title}
                </div>

                <div className="searchbtn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

            </div>

        </div>
    )
}

export default Header