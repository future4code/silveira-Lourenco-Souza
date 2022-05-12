import React from 'react'

import Header from '../../components/Header/Header'
import PostCard from '../../components/PostCard/PostCard'
import TextBox from '../../components/TextBox/TextBox'

const FeedPage = () => {
  return (
    <div>
      <Header isLogged />
        <TextBox posting />
        <PostCard />
    </div>
  )
}

export default FeedPage