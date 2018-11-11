import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'

import socket from 'socket.io-client'
import Icon from 'react-native-vector-icons/FontAwesome5'

import api from '../services/api'
import TweetList from '../components/TweetList'

export default class Timeline extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Início',
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('NewTweet')}>
        <Icon
          size={18}
          color='#4BB0EE'
          name='plus-circle'
          style={{ marginRight: 20 }}
        />
      </TouchableOpacity>
    )
  })

  constructor (props) {
    super(props)

    this.state = { tweets: [] }

    this.subscribeToEvents = () => {
      const io = socket('http://10.0.2.2:3000')

      io.on('tweet', data => {
        this.setState({ tweets: [data, ...this.state.tweets] })
      })

      io.on('like', data => {
        this.setState({ tweets:
          this.state.tweets.map(t => t._id === data._id ? data : t)
        })
      })
    }

    this.handleLike = (id) => async () => {
      const { data } = await api.post(`likes/${id}`)
      const { tweets } = this.state

      this.setState({ tweets:
        tweets.map(t => t._id === id ? data : t)
      })
    }
  }

  async componentDidMount () {
    const { data } = await api.get('tweets')
    this.setState({ tweets: data })

    this.subscribeToEvents()
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <TweetList
          tweets={this.state.tweets}
          handleLike={this.handleLike} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})
