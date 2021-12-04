import React from 'react'
import { Heading, Card, Button, PlusIcon } from 'evergreen-ui'

// const { id } = this.props

function Empty() {
    return (
        <Card
            key='empty_tile'
            display='flex'
            padding={8}
            background='white'
            border
            minHeight={50}
            margin={8}
        >
            <Card flex={1} alignItems='center' display='stretch'>
            <Button marginY={8} marginRight={8} iconBefore={PlusIcon} intent='default'>
                Add Tier
            </Button>
            <Button marginY={8} iconBefore={PlusIcon} intent='default' >
                Add Player
            </Button>                        
            <Heading paddingRight={16}></Heading>
            </Card>
        </Card>
    )
}

export default Empty;