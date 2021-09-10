import { Pane, Heading, Avatar, Card , Badge, TimeIcon, Text, PeopleIcon, Button, TextInput, Spinner } from 'evergreen-ui';
import React, { Component } from 'react'

class Import extends Component {
  constructor(props) {
    super(props)
    // this.fetchDrafts = this.fetchDrafts.bind(this)
    this.state = {
      userDrafts: []
    }
  }

  // fetchDrafts() {
  //   let userID = this.props.location.player.user_id
  //   let thisYear = new Date().getFullYear()
  //   fetch('https://api.sleeper.app/v1/user/' + userID + '/drafts/nfl/' + thisYear)
  //   .then(response => response.json())
  //   .then((result) => {
  //     this.setState({
  //       userDrafts: result
  //     })
  //   })
  // }

  // componentDidMount() {
  //   this.fetchDrafts()
  // }
  
  render() {
    // const { userDrafts } = this.state
    // let draftList = userDrafts.map((draft) => {
    //   let draftStatus = draft.status.replace('_', ' ')
    //   let format = draft.metadata.scoring_type.replace('_', ' ')
    //   return (
    //     <li key={draft.draft_id}>
    //       <Card display='flex' padding={16} background='tint2' border elevation={1} marginBottom={8}>
    //         <Card flex={1} alignItems='center' display='flex'>
    //           <Heading size={600} paddingRight={16}>{draft.metadata.name}</Heading>
    //         </Card>
    //         <Card display='flex' flexDirection='row'>
    //           <Badge marginRight={8} color={draft.status === 'pre_draft' ? 'green' : 'blue'}>{draftStatus}</Badge>
    //           <Pane display='flex' marginRight={8}><TimeIcon /><Text size={500} paddingLeft={4}>{draft.settings.pick_timer}</Text></Pane>
    //           <Pane display='flex' marginRight={8}><PeopleIcon /><Text size={500} paddingLeft={4}>{draft.settings.teams}</Text></Pane>
    //           <Badge marginRight={8} color='purple'>{format}</Badge>
    //         </Card>  
    //       </Card>
    //     </li>
    //   )
    // })
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
          minHeight={250}
          minWidth={800}
          display='flex'
          justifyContent='flex-start'
          alignItems='center'
          flexDirection='column'
          borderRadius={16}
          border='default'
        >
          <Pane id='user-card' padding={16} display='flex' flexDirection='column' alignItems='center' flex={1}>
            <Heading size={700} marginTop={8}>Import your tier-based rankings</Heading>
            
          </Pane>
        </Pane>
      </Pane>
    )
  }
}

export default Import;
