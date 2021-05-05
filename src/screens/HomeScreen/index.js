import React, {useEffect} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getHomeContent} from '../../api/home';
import {connect} from 'react-redux';
import {requestHomeContent} from '../../actions/home';

const HomeScreen = props => {
  useEffect(() => {
    props.dispatch(requestHomeContent());
  }, []);
  return (
    <Icon.Button name="facebook" backgroundColor="#3b5998">
      Login with Facebook
    </Icon.Button>
  );
};

const mapStateToProps = ({home}) => {
  return {
    home,
  };
};
export default connect(mapStateToProps)(HomeScreen);
