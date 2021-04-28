import PropTypes from "prop-types";
import {DIMENSIONS} from "../../constants";
import {ThemeContext} from "../../theme";
import React,{useContext} from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import getIconType from "./getIconType";

export const IconTypes = [
    'zocial',
    'octicon',
    'material',
    'material-community',
    'ionicon',
    'foundation',
    'evilicon',
    'entypo',
    'font-awesome',
    'font-awesome-5',
    'fontisto',
    'simple-line-icon',
    'feather',
    'antdesign',
    'FontAwesome'
];

// todo style怎么处理
const propTypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(IconTypes),
    size: PropTypes.number,
    color: PropTypes.string,
    onPress: PropTypes.func,
    disables: PropTypes.bool,
}

const defaultProps = {
    name: '',
    type: 'material',
    onPress: null,
    disabled: false,
    size: DIMENSIONS.common.iconSize,
    color: null,
    style: {},
}

const Icon = ({name,type,size,color,style,onPress,disabled}) => {
    const { theme } = useContext(ThemeContext);
    const Component = onPress ? TouchableOpacity : React.Fragment;
    const IconComponent = getIconType(type);

    return (
        <Component>
            <IconComponent
                size={size}
                name={name}
                color={
                    disabled ? theme.colors.disabledDark : color || theme.colors.icon
                }
                style={StyleSheet.flatten([styles.iconStyle, style])}
            />
        </Component>
    )
}

const styles = StyleSheet.create({
    iconStyle: {
        backgroundColor: 'transparent',
    },
});

Icon.propTypes = propTypes;

Icon.defaultProps = defaultProps;

export default Icon;
