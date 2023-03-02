import React from 'react'
 

const ItemPosts = (props) => {
  const postNewItem = async(event) =>{
    event.preventDefault();

    
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${props.token}`
        },
        body: JSON.stringify ({
          post: {
            title: props.TitleInput, 
            description: props.descriptionInput,
            price: props.priceInput,
            location: props.locationInput, 
          }
        })        
      })

      const info = await response.json()
      props.setLocationInput()
      props.setDescriptionInput()
      props.setPriceInput()
      props.setTitleInput()
      props.setPosts([...props.posts,info.data.post])
  }

  const handleChangeLocation = (event) => {
      props.setLocationInput(event.target.value)
    }

  const handleChangeDescription = (event) => {
    props.setDescriptionInput(event.target.value)
  }

  const handleChangePrice = (event) => {
    props.setPriceInput(event.target.value)
  }

  const handleChangeTitle = (event) => {
    props.setTitleInput(event.target.value)
  }

   
  const deletePost = async (postId) => {
    try {
      const response = await fetch(`${`https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts/${postId}`}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${props.token}`
        }
      });
      const filteredPosts = props.posts.filter(post => postId !== post._id);
      props.setPosts(filteredPosts)
    } 
    catch (err) {
      console.error(err);
    }
  }
    
  return (
    <> 
      {
        props.isLoggedIn ? 
          <form class='post-form' onSubmit={postNewItem}>
            
            <input class='post-form' onChange={handleChangeLocation} placeholder="Location"></input> 
            <input class='post-form' onChange={handleChangeDescription} placeholder="Description"></input>
            <input class='post-form' onChange={handleChangePrice} placeholder="Price"></input>
            <input class='post-form' onChange={handleChangeTitle} placeholder="Title"></input>
            <button class='post-form' type='text'>Make Post</button>
          
          </form> :
          null 
      }

      <ol>
      {
        props.posts.map((post) => { 
            
          return (
            <>
              <li key={post._id}>{post.title} - {post.location} - {post.author.username} - {post.price} - {post.description}</li>
              { 
                post.isAuthor ? 
                <button id='delete-post' onClick={()=> deletePost(post._id)}>Delete This Post</button>
                : null
              } 
            </>
          )
        })
        
      }
      </ol>
    </>
  )
}

export default ItemPosts 
