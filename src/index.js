
import { createRoot } from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import Header from './header.js'
import ItemPost from './Posts.js';

const App = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async() => {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts')
      const data = await response.json()
      setPosts(data.data.posts)
    }
    getPosts()
  }, []);

  return (
    <div>
      <Header/>
      <ItemPost posts={posts}/>
    </div>
  )
}




const container = document.getElementById('app')
const root = createRoot(container); 
root.render(<App />)

