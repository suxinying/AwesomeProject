import AsyncStorage from '@react-native-async-storage/async-storage';
const THEME_TYPE_ASYNC_KEY = 'themeType';

export const loadValue = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    return null;
  }
};

export const loadThemeType = async () => loadValue(THEME_TYPE_ASYNC_KEY);
