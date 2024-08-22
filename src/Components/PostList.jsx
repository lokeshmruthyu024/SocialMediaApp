import React, { useContext, useEffect } from 'react'
import Post from './Post';
import { PostList as PostListData } from '../store/PostsListStore';
// import Welcomemessage from './Welcomemessage.jsx'

const PostList = () => {

  const { postList, addInitialPosts } = useContext(PostListData);

  // useEffect(() => {
  //   fetch('https://localhost:8000/')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts)
  //     })
  // }, []);

  return (
    <>
      {/* {fetching && <LoadingSpinner />} */}
      {/* {postList.length === 0 && <Welcomemessage />} */}
      {postList.map((post => (<Post key={post.id} post={post} />))
      }
    </>
  )
}

export default PostList;
