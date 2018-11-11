import React, { Component } from 'react'

import socket from 'socket.io-client'
import api from '../services/api'

import '../styles/Timeline.css'
import twitterLogo from '../assets/twitter.svg'
import TweetList from '../components/TweetList'
import TweetForm from '../components/TweetForm'

export default class Timeline extends Component {
  constructor (props) {
    super(props)

    this.maxLength = 280

    this.state = {
      tweets: [],
      newTweet: ''
    }

    this.subscribeToEvents = () => {
      const io = socket('http://localhost:3000')

      io.on('tweet', data => {
        this.setState({ tweets: [data, ...this.state.tweets] })
      })

      io.on('like', data => {
        const { tweets } = this.state

        this.setState({ tweets:
          tweets.map(t => t._id === data._id ? data : t)
        })
      })
    }

    this.handleNewTweet = async (e) => {
      if (e.keyCode === 13) {
        const content = this.state.newTweet
        const author = localStorage.getItem('@GoTwitter:username')

        await api.post('tweets', { content, author })
        this.setState({ newTweet: '' })
      }
    }

    this.handleInputChange = (e) => {
      this.setState({ newTweet: e.target.value })
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
      <div className='timeline-wrapper'>
        <img
          height={24}
          src={twitterLogo}
          alt='Twitter logo'
        />

        <TweetForm
          maxLength={this.maxLength}
          newTweet={this.state.newTweet}
          handleNewTweet={this.handleNewTweet}
          handleInputChange={this.handleInputChange}
        />

        <TweetList
          tweets={this.state.tweets}
          handleLike={this.handleLike} />
      </div>
    )
  }
}
