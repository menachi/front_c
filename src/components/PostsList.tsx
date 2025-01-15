import ItemsList from "./ItemsList"
import usePosts from "../hooks/usePosts"

function PostsList() {
  const { posts, error, isLoading } = usePosts();

  return (
    <div className="m-5">
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      <ItemsList items={posts.map(post => post.title)} title="Posts" onItemsSelected={() => { }} />
    </div>

  )
}


export default PostsList
