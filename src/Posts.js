import React from 'react'

const ItemPost = (props) => {
    return (
        <ol>
        {
          props.posts.map((post) => { 
            console.log(post)
            return <li>{post.title} - {post.location} - {post.author.username} - {post.price} - {post.description}</li>
  
          })
           
        }
        </ol>
    )
}

export default ItemPost 