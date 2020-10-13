import React from 'react'

function UserInput(props) {

    const style = {
        backgroundColor: 'blue',
        font: 'inherit',
        border: '1x solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    return (
        <div>
            <input style={style} onChange={props.changeUsername} type="text" value={props.username}/>
        </div>
    )
}

export default UserInput