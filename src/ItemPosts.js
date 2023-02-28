import React from 'react'
 

const ItemPosts = (props) => {

  const postNewItem = async(event) =>{
    event.preventDefault();
    // fetch post api 
   // console.log(`TOKEN`, props.token)
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
      console.log(info)
      props.setLocationInput()
      props.setDescriptionInput()
      props.setPriceInput()
      props.setTitleInput()
      props.setPosts([...props.posts,info.data.post])
  }

const handleChangeLocation = (event) => {
    //console.log(event.target.value)
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

  //console.log(props.posts)
    return (
      <> 
      {
        props.isLoggedIn ? 
          <form onSubmit={postNewItem}>
            {/* correct this, something is wrong */}
            <input onChange={handleChangeLocation} placeholder="Location"></input> 
            <input onChange={handleChangeDescription} placeholder="Description"></input>
            <input onChange={handleChangePrice} placeholder="Price"></input>
            <input onChange={handleChangeTitle} placeholder="Title"></input>
            <button type='text'>Make Post</button>
           
          </form> :
          null 

      }
        <ol>
        {
          props.posts.map((post) => { 
            //console.log(post)
          // delete button?
            return <li key={post._id}>{post.title} - {post.location} - {post.author.username} - {post.price} - {post.description}</li>
  
          })
           
        }
        </ol>
        </>
    )
}

export default ItemPosts 