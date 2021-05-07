import React, {useEffect} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getHomeContent} from '../../api/home';
import {connect} from 'react-redux';
import {requestHomeContent} from '../../actions/home';
import ImageSlider from '../../components/ImageSlider';

const HomeScreen = props => {
  useEffect(() => {
    props.dispatch(requestHomeContent());
    console.error(props.home);
  }, []);
  return (
    <>
      <ImageSlider height={200} media={props.home.brandList} />
    </>
  );
};

const mapStateToProps = ({home}) => {
  return {
    home,
  };
};
export default connect(mapStateToProps)(HomeScreen);
