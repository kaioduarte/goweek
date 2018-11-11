import React from 'react'

import '../styles/TweetForm.css'

export default ({ maxLength, newTweet, handleInputChange, handleNewTweet }) => (
  <form>
    <div className='form-container'>
      <textarea
        value={newTweet}
        maxLength={maxLength}
        onChange={handleInputChange}
        onKeyDown={handleNewTweet}
        placeholder='O que está acontecendo?'
      />
      <p className='tweet-length'>
        {`${newTweet.length}/${maxLength}`}
      </p>
    </div>
  </form>
)
