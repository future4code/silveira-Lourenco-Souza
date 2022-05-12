import React from 'react'

import Header from '../../components/Header/Header'
import PostCard from '../../components/PostCard/PostCard'
import TextBox from '../../components/TextBox/TextBox'

const PostDetailsPage = () => {
  return (
    <div>
      <Header isLogged postPage/>
      <PostCard />
      <TextBox />
      <PostCard post/>

    </div>
  )
}

export default PostDetailsPage