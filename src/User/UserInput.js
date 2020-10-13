import React from 'react'

function UserInput(props) {
    return (
        <div>
            <input onChange={props.changeUsername} type="text" value={props.username}/>
        </div>
    )
}

export default UserInput