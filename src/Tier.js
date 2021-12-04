import React, { useState } from 'react'
import { Card, DragHandleVerticalIcon } from 'evergreen-ui'

import './Tier.css'
function Tier(props) {
    const { id } = props
    const [display, setDisplay] = useState('none');
    const showButton = e => {
        e.preventDefault();
        setDisplay('block');
      };
    
      const hideButton = e => {
        e.preventDefault();
        setDisplay('none');
      };
      const InlineEdit = ({ value, setValue }) => {
        const [editingValue, setEditingValue] = useState(value)

        const onChange = (event) => setEditingValue(event.target.value)

        const onKeyDown = (event) => {
            if (event.key === "Enter" || event.key === "Escape") {
              event.target.blur();
            }
          }

          const onBlur = (event) => {
            if (event.target.value.trim() === "") {
              setEditingValue(value);
            } else {
              setValue(event.target.value);
            }
          }

          return (
            <input
            type='text'
            aria-label='tier-field'
            value={editingValue}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
        />  
          )

        }

        const [value, setValue] = useState('Tier 1');
          
    return (
        <Card
            key={id}
            display='flex'
            padding={8}
            background='#0F9B8E'
            border
            margin={8}
            minHeight={50}
            style={{cursor: 'pointer'}}
            onMouseEnter={e => showButton(e)}
            onMouseLeave={e => hideButton(e)}
        >
            <Card flex={1} alignItems='center' display='flex'>    
                <InlineEdit value={value} setValue={setValue} />      
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

export default Tier;