import { Pane, TextInput, Button, majorScale, Heading } from 'evergreen-ui';

function App() {
  return (
    <Pane
      background='tint2'
      marginX={majorScale(4)}
      marginY={majorScale(4)}
      width={500}
      height={150}
      display='flex'
      alignItems='center'
      justifyContent='center'
      borderRadius={8}
      border='default'>
        <Pane flex={1} padding={16} borderRadius={5}>
          <Heading size={600}>Enter your Sleeper username to get started...</Heading>
          <Pane display='flex' marginTop={16}>
            <TextInput name='sleeper-username-input' marginRight={8} width='100%' />
            <Button appearance='primary'>Go</Button>
          </Pane>
        </Pane>
    </Pane>
  );
}

export default App;
