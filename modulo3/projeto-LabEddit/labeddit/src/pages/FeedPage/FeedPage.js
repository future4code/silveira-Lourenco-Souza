import React from 'react'

import Header from '../../components/Header/Header'
import PostCard from '../../components/PostCard/PostCard'
import TextBox from '../../components/TextBox/TextBox'
import { BASE_HEADER, BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'

const FeedPage = () => {

  useProtectedPage()

  const listOfPosts = useRequestData([], `${BASE_URL}/posts`, BASE_HEADER)

  const mapListOfPosts = listOfPosts && listOfPosts.map((post) => {
    return <PostCard 
      key={post.id} 
      clickable 
      username={post.username} 
      body={post.body} 
      voteSum={post.voteSum} 
      commentCount={post.commentCount}
      id={post.id}
      
    />
  })

  return (
    <div>
      <Header />
        <TextBox posting />
        {mapListOfPosts}
    </div>
  )
}

export default FeedPage