import React from 'react'

function UserOutput(props) {
    return (
        <div>
            <p>Coding and Eating</p>
            <p onClick={props.click} >I, {props.username}, want to learn how to eat while I code without making a mess.</p>
        </div>
    )
}

export default UserOutput