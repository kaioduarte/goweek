import React from 'react'

import like from '../assets/like.svg'
import '../styles/Tweet.css'

export default ({ _id, content, author, likes, handleLike }) => (
  <li className='tweet'>
    <strong>{author}</strong>
    <p>{content}</p>
    <button type='button' onClick={handleLike(_id)}>
      <img src={like} alt='Like this tweet' />
      {likes}
    </button>
  </li>
)
