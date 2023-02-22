import React from 'react'
 

const ItemPosts = (props) => {
  console.log(props.posts)
    return (
      <> 
      {
        props.isLoggedIn ? 
          <form>
            <input placeholder="location"></input> 
            <input placeholder="description"></input>
            <input placeholder="price"></input>
            <input placeholder="Item Name"></input>
            <button>Make Post</button>
          </form> :
          null 

      }
        <ol>
        {
          props.posts.map((post) => { 
            console.log(post)
            return <li key={post._id}>{post.title} - {post.location} - {post.author.username} - {post.price} - {post.description}</li>
  
          })
           
        }
        </ol>
        </>
    )
}

export default ItemPosts 