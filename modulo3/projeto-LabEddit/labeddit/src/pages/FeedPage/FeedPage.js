import React from 'react'

import Header from '../../components/Header/Header'
import PostCard from '../../components/PostCard/PostCard'
import TextBox from '../../components/TextBox/TextBox'
import useProtectedPage from '../../hooks/useProtectedPage'

const FeedPage = () => {

  useProtectedPage()

  return (
    <div>
      <Header isLogged />
        <TextBox posting />
        <PostCard clickable />
    </div>
  )
}

export default FeedPage