import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return <Icon.Button
      name="facebook"
      backgroundColor="#3b5998"
  >
    Login with Facebook
  </Icon.Button>
};

export default HomeScreen;
