import PostsList from "./PostsList"


function App() {
  const name = 'Eliav'
  const getName = () => {
    return name
  }
  return (
    <>
      <div>
        <h1>Hello, React {getName()}</h1>
        <PostsList />
      </div>
    </>

  )
}

export default App
