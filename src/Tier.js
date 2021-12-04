import React, { Component } from 'react'
import { Heading, Card } from 'evergreen-ui'

class Tier extends Component {
    render() {
        const { id, tier } = this.props
        return (
            <Card
                key={id}
                display='flex'
                padding={8}
                background='tint2'
                border
                elevation={1}
                margin={8}
                minHeight={50}
                style={{cursor: 'pointer'}}
            >
                <Card flex={1} alignItems='center' display='flex'>
                <Heading paddingRight={16}>{tier}</Heading>
                </Card>
            </Card>
        )
    }
}

export default Tier;