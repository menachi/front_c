import PostsList from "./PostsList"

function App() {

  const name = 'Eliav'
  const getName = () => {
    return name
  }
  console.log('App')
  const items = ['item1', 'item2', 'item3']

  const onItemsSelected = (index: number) => {
    console.log('App - Selected index is', index)

  }

  return (
    <>
      <div style={{
        backgroundColor: 'grey',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
        width: '500px'
      }}>
        <h1>Hello, React {getName()}</h1>
        <PostsList title="this is my array" items={items} onItemsSelected={onItemsSelected} />
      </div>
      <div style={{
        backgroundColor: 'grey',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
        width: '500px'
      }}>
        <h1>Hello, React {getName()}</h1>
        <PostsList title="this is my array" items={items} onItemsSelected={onItemsSelected} />
      </div>

    </>

  )
}

function App2() {
  return (
    <div style={{
      width: '100vw',
      height: '500px',
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: 'red',
        width: '100px',
        height: '100px'
      }}>
      </div>
      <div style={{
        backgroundColor: 'blue',
        width: '100px',
        height: '100px',
        flex: 1,
        position: 'absolute',
        top: '50px',
        right: '150px'

      }}>
      </div>
      <div style={{
        backgroundColor: 'yellow',
        width: '100px',
        height: '100%',
        flex: 1
      }}>
      </div>
    </div>
  )
}

export default App2
