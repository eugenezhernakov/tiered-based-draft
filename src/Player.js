import React, { Component } from 'react'
import { Card, Heading, Avatar, Pane } from 'evergreen-ui'

class Player extends Component {
    render() {
        const { id, name } = this.props
        return (
            <Card
            key={id}
s           display='flex'
            padding={8}
            background='tint2'
            border
            elevation={1}
            margin={8}
            minHeight={50}
            style={{cursor: 'grab', position: 'relative'}}>
                <Card flex={1} alignItems='center' display='flex' flexDirection='row'>
                    <Pane style={{paddingRight: 5}}><Avatar name='W R' /></Pane>
                    <Heading>{name}</Heading>
                    <Heading style={{paddingLeft: 5, position: 'absolute', right: 4, top: 4}} size={100}>4.3</Heading>
                </Card>
            </Card>
        )
    }
}

export default Player;