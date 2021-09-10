import { Pane, Heading, Avatar, Card , Badge, TimeIcon, Text, PeopleIcon, Button, TextInput, Spinner } from 'evergreen-ui';
import React, { Component } from 'react'

class SelectDraft extends Component {
  constructor(props) {
    super(props)
    this.fetchDrafts = this.fetchDrafts.bind(this)
    this.goToImport = this.goToImport.bind(this)
    this.state = {
      userDrafts: []
    }
  }

  fetchDrafts() {
    let userID = this.props.location.player.user_id
    let thisYear = new Date().getFullYear()
    fetch('https://api.sleeper.app/v1/user/' + userID + '/drafts/nfl/' + thisYear)
    .then(response => response.json())
    .then((result) => {
      this.setState({
        userDrafts: result
      })
    })
  }

  goToImport() {
    this.props.history.push({pathname: '/import'})
  }

  componentDidMount() {
    this.fetchDrafts()
  }
  
  render() {
    const { userDrafts } = this.state
    let draftList = userDrafts.map((draft) => {
      let draftStatus = draft.status.replace('_', ' ')
      let format = draft.metadata.scoring_type.replace('_', ' ')
      return (
        <li key={draft.draft_id}>
          <Card display='flex' padding={16} background='tint2' border elevation={1} marginBottom={8}>
            <Card flex={1} alignItems='center' display='flex'>
              <Heading size={600} paddingRight={16}>{draft.metadata.name}</Heading>
            </Card>
            <Card display='flex' flexDirection='row'>
              <Badge marginRight={8} color={draft.status === 'pre_draft' ? 'green' : 'blue'}>{draftStatus}</Badge>
              <Pane display='flex' marginRight={8}><TimeIcon /><Text size={500} paddingLeft={4}>{draft.settings.pick_timer}</Text></Pane>
              <Pane display='flex' marginRight={8}><PeopleIcon /><Text size={500} paddingLeft={4}>{draft.settings.teams}</Text></Pane>
              <Badge marginRight={8} color='purple'>{format}</Badge>
            </Card>  
          </Card>
        </li>
      )
    })
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
            <Card display='flex' flex={1}>
            <Heading size={700} marginTop={8} marginRight={8}>Welcome</Heading>
            <Avatar 
              src={'https://sleepercdn.com/avatars/thumbs/' + this.props.location.player.avatar} 
              name={this.props.location.player.display_name}
              size={40}
            />
            <Heading size={700} marginLeft={8} marginTop={8}>{this.props.location.player.display_name}!</Heading>
            </Card>
            <Heading size={700} flex={2} marginTop={16}>Choose a draft</Heading>
          </Pane>
          <Pane id='draft-container'>
            {userDrafts.length === 0 ? <Spinner /> : <ul style={{listStyle: 'none', padding: 0}}>{draftList}</ul>}
          </Pane>
          <Pane padding={16} display='flex' flexDirection='column' alignItems='center' flex={1}>
          <Heading size={700}>Paste your own Draft ID instead</Heading>
          <Heading size={100}>https://sleeper.app/draft/nfl/<b><u>741724225102053376</u></b></Heading>
            <Pane display='flex' marginTop={16}>
              <TextInput 
                  height={48} 
                  name='sleeper-username-input' 
                  marginRight={8} 
                  placeholder='741724225102053376'
                  onChange={e => this.setState({user: e.target.value})} 
              />
              <Button height={48} appearance='primary' onClick={this.goToImport}>Go</Button>
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    )
  }
}

export default SelectDraft;
