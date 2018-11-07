import React from 'react'

export default ({ newTwitter, handleInputChange, handleNewTweet }) => (
  <form>
    <textarea
      style={{ height: 120 }}
      value={newTwitter}
      onChange={handleInputChange}
      onKeyDown={handleNewTweet}
      placeholder='O que está acontecendo?'
    />
  </form>
)
