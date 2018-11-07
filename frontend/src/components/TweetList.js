import React from 'react'

import Tweet from './Tweet'
import '../styles/TweetList.css'

export default ({ tweets, handleLike }) => (
  <ul className='tweet-list'>
    {tweets.map(tweet => (
      <Tweet
        key={tweet._id}
        handleLike={handleLike}
        {...tweet}
      />
    ))}
  </ul>
)
