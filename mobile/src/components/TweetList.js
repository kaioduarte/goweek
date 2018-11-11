import React from 'react'
import { FlatList } from 'react-native'

import Tweet from './Tweet'

export default ({ tweets, handleLike }) => (
  <FlatList data={tweets}
    keyExtractor={({ _id }) => _id}
    renderItem={({ item: tweet }) => (
      <Tweet handleLike={handleLike} {...tweet} />
    )}
  />
)
