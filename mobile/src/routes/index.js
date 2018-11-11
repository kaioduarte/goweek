import { createStackNavigator } from 'react-navigation'

import Login from '../screens/Login'
import Timeline from '../screens/Timeline'
import NewTweet from '../screens/NewTweet'

const routes = createStackNavigator({
  Login,
  Timeline,
  NewTweet
})

export default routes
