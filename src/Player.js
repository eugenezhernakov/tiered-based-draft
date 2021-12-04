import React, { useState } from 'react'
import { Card, Heading, Avatar, Pane, DragHandleVerticalIcon } from 'evergreen-ui'

function Player(props) {
    const [display, setDisplay] = useState('none');
    const showButton = e => {
        e.preventDefault();
        setDisplay('block');
      };
    
      const hideButton = e => {
        e.preventDefault();
        setDisplay('none');
      };
    const { id, name } = props
    return (
        <Card
        key={id}
        display='flex'
        background='white'
        padding={8}
        border
        margin={8}
        minHeight={50}
        onMouseEnter={e => showButton(e)}
        onMouseLeave={e => hideButton(e)}
        style={{cursor: 'grab', position: 'relative'}}>
            <Card flex={1} alignItems='center' display='flex' flexDirection='row'>
                <Pane style={{paddingRight: 5}}><Avatar name='W R' /></Pane>
                <Heading>{name}</Heading>
            </Card>
            <Card
            justifyContent='center'
            alignItems='center'
            style={{'display': display, marginTop: 7}}>
                <DragHandleVerticalIcon />
            </Card>
        </Card>
    )
}

export default Player;