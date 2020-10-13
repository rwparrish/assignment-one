import React from 'react'
import './UserOutput.css'

const userOutput = props => {
    
    return (
        <div className='UserOutput'>
            <p >Coding and Eating</p>
            <p onClick={props.click} >I, {props.userName}, want to learn how to eat while I code without making a mess.</p>
        </div>
    )
}

export default userOutput