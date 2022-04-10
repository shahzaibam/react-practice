import React from 'react'
import '../App.css'

const Header = (props) => {
    return (
        <div className='container'>

            <div className="navbar">
                <div className="icon">
                    Hamburger Menu
                </div>

                <div className="title">
                    {props.title}
                </div>

                <div className="searchbtn">
                    Search
                </div>

            </div>

        </div>
    )
}

export default Header