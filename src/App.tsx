import PostsList from "./PostsList"
import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
}

function App() {
  const [items, setItems] = useState<string[]>([]);

  const getItems = async () => {
    console.log("getItems")
    try {
      const response = await axios.get<Post[]>("http://localhost:3030/posts");
      console.log(response.data);
      setItems(response.data.map((post) => post.title));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("useEffect")
    getItems();
  }, []);

  return (
    <div className="m-5">
      <PostsList items={items} title="Posts" onItemsSelected={() => { }} />
    </div>

  )
}


export default App
