import React, { useContext, useRef } from 'react'
import { PostList } from '../store/PostsListStore';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(PostList)

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const Handlesubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";


    addPost(userId, postTitle, postBody, reactions, tags)
    navigate('/');
  }

  return (
    <form className='create-post' onSubmit={Handlesubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className='form-label'>Enter Your User Id here</label>
        <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Enter Your Id" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className='form-label'>Post Title</label>
        <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="How are You Feeling today" />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className='form-label'>Post Content</label>
        <textarea type="text" ref={postBodyElement} rows={4} className="form-control" id="title" placeholder="Tell us More about it" />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className='form-label'>Number of Reactions</label>
        <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="How Many People reacted to this post" />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className='form-label'>Enter Your Hastags</label>
        <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Please enter tags using space" />
      </div>
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  )
}

export const createPostAction = () => {

}

export default CreatePost
