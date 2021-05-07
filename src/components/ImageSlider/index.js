import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  StyleSheet,
  ViewPropTypes,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';

const propTypes = {
  height: PropTypes.number.isRequired,
  media: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      bigPic: PropTypes.string,
    }),
  ),
  resizeMode: PropTypes.oneOf([
    'cover',
    'contain',
    'stretch',
    'repeat',
    'center',
  ]),
  containerStyle: ViewPropTypes.style,
  onPress: PropTypes.func,
};

const defaultProps = {
  resizeMode: 'cover',
  containerStyle: {},
  autoplay: false,
  onPress: null,
};
const ImageSlider = ({
  height,
  media,
  autoplay,
  resizeMode,
  containerStyle,
  onPress,
  ...props
}) => {
  console.error(media);
  const ViewGroup = onPress ? TouchableWithoutFeedback : React.Fragment;
  return (
    <View style={[{height}, containerStyle]}>
      <Swiper height={height} autoplay={autoplay} {...props}>
        {media.map((item, index) => (
          <ViewGroup key={String(item.id)}>
            <Image
              key={String(item.id)}
              style={{top: 0, height}}
              resizeMode={resizeMode}
              source={{uri: item.bigPic}}
            />
          </ViewGroup>
        ))}
      </Swiper>
    </View>
  );
};
ImageSlider.propTypes = propTypes;
ImageSlider.defaultProps = defaultProps;
export default ImageSlider;
