import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'

import api from '../services/api'

export default class NewTweet extends Component {
  static navigationOptions = () => ({
    header: null
  })

  constructor (props) {
    super(props)

    this.maxLength = 280

    this.state = { newTweet: '' }

    this.goBack = () => {
      this.props.navigation.pop()
    }

    this.handleInputChange = (newTweet) => {
      this.setState({ newTweet })
    }

    this.handleNewTweet = async () => {
      const { author, newTweet: content } = this.state
      await api.post('tweets', { author, content })
      this.goBack()
    }
  }

  async componentDidMount () {
    const author = await AsyncStorage.getItem('@GoTwitter:username')
    this.setState({ author })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.goBack}>
            <Icon size={24}
              color='#4BB0EE'
              name='times-circle' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.handleNewTweet}>
            <Text style={styles.buttonText}>Tweetar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            multiline
            autoFocus
            returnKeyType='send'
            style={styles.input}
            maxLength={this.maxLength}
            value={this.state.newTweet}
            onChangeText={this.handleInputChange}
            onSubmitEditing={this.handleNewTweet}
            placeholder='O que você está pensando?'
          />
          <View style={styles.tweetLengthContainer}>
            <Text style={styles.tweetLength}>
              {`${this.state.newTweet.length}/${this.maxLength}`}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },

  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  button: {
    height: 32,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: '#4BB0EE',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },

  input: {
    margin: 20,
    fontSize: 16,
    color: '#333'
  },

  tweetLengthContainer: {
    display: 'flex',
    paddingRight: 20,
    justifyContent: 'flex-end'
  },

  tweetLength: {
    color: '#999',
    alignSelf: 'flex-end'
  }
})
