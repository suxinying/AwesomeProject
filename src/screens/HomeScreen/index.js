import React, {useEffect} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getHomeContent} from '../../api/home';

const HomeScreen = () => {
  useEffect(() => {
    getHomeContent().then(response => {
      console.error(response, '?');
    });
  }, []);
  return (
    <Icon.Button name="facebook" backgroundColor="#3b5998">
      Login with Facebook
    </Icon.Button>
  );
};

export default HomeScreen;
