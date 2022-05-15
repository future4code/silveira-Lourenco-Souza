import React from 'react'

import Header from '../../components/Header/Header'
import PostCard from '../../components/PostCard/PostCard'
import TextBox from '../../components/TextBox/TextBox'
import useProtectedPage from '../../hooks/useProtectedPage'

const PostDetailsPage = () => {

  useProtectedPage()

  return (
    <div>
      <Header postPage/>
      <PostCard />
      <TextBox />
      <PostCard post/>

    </div>
  )
}

export default PostDetailsPage