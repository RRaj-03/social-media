import React from 'react'
import PostContext from './PostContext'
import { useState } from 'react'
const PostState = (props) => {
    const [Posts, setPosts] = useState([{
            title:"This is 1st Post",
            content:"this post was created so that page wont look empty",
            user:"RRaj",
            date: new Date(),
            like:0,
            dislike:0,
    }])
    function SubmitPost() {
        const title = document.getElementById("PostHead").value
        const content= document.getElementById("Post").value
        const newpost={
            title,
            content,
            user:"RRaj",
            date: new Date(),
            like:0,
            dislike:0,
        }
        let oldposts = Posts 
        setPosts(oldposts.concat(newpost))
        document.getElementById("PostHead").value=""
        document.getElementById("Post").value=""
    }
    function deletePost(index) {
        let oldpost = Posts.slice()
            oldpost.splice(index,1)
            setPosts(oldpost)
       }
    function EditPost(index,titlePost,contentPost,likes,dislikes,date,contentUpdated) {
        let oldpost = Posts.slice()
        if(contentUpdated){
            oldpost[index]={
                title:titlePost,
                content:contentPost,
                user:"RRaj",
                date: new Date(),
                like:likes,
                dislike:dislikes,
            }
        }else{
            oldpost[index].like=likes
            oldpost[index].dislike=dislikes
        }
        setPosts(oldpost)
    }
  return (
    <PostContext.Provider value={{Posts,setPosts,EditPost,deletePost,SubmitPost}}>
        {props.children}
    </PostContext.Provider>
  )
}

export default PostState