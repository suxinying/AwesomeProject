import React, {useContext, useEffect} from 'react';
import {darkTheme, lightTheme, ThemeContext, ThemeProvider} from './theme';
import {Appearance, AppearanceProvider} from 'react-native-appearance';
import {loadThemeType} from './util/storage';
import FlashMessage from 'react-native-flash-message';
import {DARK_THEME_LK, TYPOGRAPHY} from './constants';
import RootNavigator from './navigation/RootNavigator';
import {Provider} from 'react-redux';
import store from './store';
import SplashScreen from "react-native-splash-screen";

const App = () => {
  const {setTheme} = useContext(ThemeContext);
  useEffect(() => {
    // 关闭启动屏
    SplashScreen.hide();
    async function initialTheme() {
      const userThemePreference = await loadThemeType();
      const appearance = Appearance.getColorScheme();
      let theme;
      if (userThemePreference) {
        theme = userThemePreference === DARK_THEME_LK ? darkTheme : lightTheme;
      } else {
        theme = appearance === DARK_THEME_LK ? darkTheme : lightTheme;
      }
      handleThemeChange(theme);
    }
    initialTheme().then();
  }, []);
  useEffect(() => {
    const subscription = Appearance.addChangeListener(
      async ({colorScheme: newColorScheme}) => {
        const userThemePreference = await loadThemeType();
        if (!userThemePreference) {
          const theme = newColorScheme === 'dark' ? darkTheme : lightTheme;
          handleThemeChange(theme);
        }
      },
    );
    return () => subscription.remove();
  }, []);

  const handleThemeChange = theme => {
    FlashMessage.setColorTheme({
      success: theme.colors.success,
      info: theme.colors.info,
      warning: theme.colors.warning,
      danger: theme.colors.error,
    });
    setTheme(theme);
  };

  return (
    <>
      <RootNavigator />
      <FlashMessage position="top" titleStyle={TYPOGRAPHY.flashMessageTitle} />
    </>
  );
};

const RootWrapper = () => {
  return (
    <Provider store={store}>
      <AppearanceProvider>
        <ThemeProvider theme={lightTheme}>
          <App />
        </ThemeProvider>
      </AppearanceProvider>
    </Provider>
  );
};

export default RootWrapper;
