import { Pane, TextInput, Button, Heading } from 'evergreen-ui';
import React, { Component } from 'react'

//onClick={() => this.props.history.push('/select-draft')}

class Home extends Component {
  constructor() {
    super()
    this.fetchUser = this.fetchUser.bind(this)
    this.state = {
      user: '',
      isLoading: false
    }
  }

  fetchUser() {
      fetch('https://api.sleeper.app/v1/user/' + this.state.user)
      .then(response => response.json())
      .then((result) => {
        this.props.history.push({pathname: '/select-draft', player: result})
        console.log(result);
      })
  }

  render() {
      const { user } = this.state
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
        height={250}
        width={500}
        display='flex'
        justifyContent='center'
        alignItems='center'
        borderRadius={16}
        border='default'>
        <Pane padding={16}>
          <Heading size={700}>Enter your Sleeper username to get started...</Heading>
          <Pane display='flex' marginTop={16}>
            <TextInput 
                height={48} 
                name='sleeper-username-input' 
                marginRight={8} 
                width='100%'
                value={user}
                onChange={e => this.setState({user: e.target.value})} 
            />
            <Button disabled={user.length <= 0 ? true : false} height={48} appearance='primary' onClick={this.fetchUser}>Go</Button>
          </Pane>
        </Pane>
      </Pane>
        </Pane>

    )
  }
}

export default Home;
