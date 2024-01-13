import React from 'react'
import CommentInput from '../components/CommentInput'
import Comment from '../components/Comment'
import { mockComment } from '../utils/mockComment'

const Test = () => {
  return (
    <Comment  comment={mockComment} />
    )
}

export default Test