import React from 'react'

const userInput = props => {

    const style = {
        backgroundColor: 'blue',
        font: 'inherit',
        border: '1x solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    return (
      <input style={style} onChange={props.changeUsername} type="text" value={props.username}/>
    )
}

export default userInput