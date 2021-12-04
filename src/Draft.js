import React, { useState } from 'react'
import { Pane, Heading } from 'evergreen-ui'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import Player from './Player'
import Tier from './Tier'
import Empty from './Empty'

const tierList = [
    {
        id: '1',
        type: 'player',
        content: 'Tom Brady'
    },
    {
        id: '2',
        type: 'tier',
        content: 'Tier 1'
    },
    {
        id: '3',
        type: 'player',
        content: 'AJ Brown'
    }
]

const players = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',
    },
]

function Draft() {
    const [list, updateTierList] = useState(tierList)

    function handleOnDragEnd(result) {
      if (!result.destination) return
  
      const items = Array.from(list);
      const [reorderedItem] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reorderedItem)
  
      updateTierList(items)
    }
    return (
        <Pane
        minHeight='100vh'
        width='100vw'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        backgroundColor='#00022E'
      >
        <Pane
        background='tint2'
        minHeight={600}
        minWidth={1000}
        display='flex'
        justifyContent='space-evenly'
        alignItems='center'
        flexDirection='row'
        borderRadius={16}
        border='default'
        >
            <Pane
            backgroundColor='white'
            elevation={1}
            borderRadius={16}
            minHeight={400}
            minWidth={200}
            alignItems='stretch'
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'
            >
            <Heading>Tiers</Heading>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='list'>
                    {(provided) => (
                        <ul className='list' {...provided.droppableProps} ref={provided.innerRef} style={{listStyle: 'none', padding: 0}}>
                        {list.map(({id, content, type}, index) => {
                            if (type === 'player') {
                                return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}><Player name={content} /></li>
                                        )}
                                    </Draggable>
                                )
                            } else {
                                return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}><Tier tier={content} /></li>
                                        )}
                                    </Draggable>
                                )
                            }
                        })}
                        {provided.placeholder}
                        <Empty />
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            </Pane>
            <Pane
            backgroundColor='#d8dae5'
            borderRadius={16}
            minHeight={250}
            minWidth={250}
            alignItems='center'
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'
            >
            <Heading>Draft</Heading>
            </Pane> 
            <Pane
            backgroundColor='#d8dae5'
            borderRadius={16}
            minHeight={400}
            minWidth={150}
            alignItems='center'
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'
            >
            <Heading>Last 10 Picks</Heading>
                {players.map(player => (
                    <Player id={player.id} />
                ))}
            </Pane> 
        </Pane>              
      </Pane>        
    )
}

export default Draft