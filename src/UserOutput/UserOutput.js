import React from 'react'

const userOutput = props => {
    
    return (
        <div className='User'>
            <p >Coding and Eating</p>
            <p onClick={props.click} >I, {props.userName}, want to learn how to eat while I code without making a mess.</p>
        </div>
    )
}

export default userOutput