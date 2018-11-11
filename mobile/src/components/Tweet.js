import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

export default ({ _id, content, author, likes, handleLike }) => (
  <View style={styles.container}>
    <Text style={styles.author}>{author}</Text>
    <Text style={styles.content}>{content}</Text>
    <TouchableOpacity onPress={handleLike(_id)} style={styles.likeButton}>
      <Icon name='heart' alt='Like this tweet' />
      <Text style={styles.likeText}>{likes}</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },

  author: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C2022'
  },

  content: {
    fontSize: 15,
    lineHeight: 20,
    color: '#1C2022',
    marginVertical: 10
  },

  likeButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  likeText: {
    color: '#999',
    marginLeft: 5
  }
})
