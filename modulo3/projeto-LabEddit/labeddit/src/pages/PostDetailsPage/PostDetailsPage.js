import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header/Header'
import PostCard from '../../components/PostCard/PostCard'
import TextBox from '../../components/TextBox/TextBox'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'

const PostDetailsPage = () => {

  const params = useParams()
  const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)



  const mapComments = comments && comments.map((value) => {
    return (<PostCard key={value.id}
      post
      username={value.username}
      body={value.body}
      voteSum={value.voteSum}     
      />)
  })

  useProtectedPage()

  return (
    <div>
      <Header postPage/>
      <PostCard />
      <TextBox />
      {mapComments}

    </div>
  )
}

export default PostDetailsPage