import React from 'react'

const userInput = props => {

    const style = {
        display: 'inline',
        textAlign: 'center',
        font: 'inherit',
        border: '2x solid blue',
      };

    return (
      <input type="text" style={style} onChange={props.changedUsername} value={props.currentName}/>
    )
}

export default userInput