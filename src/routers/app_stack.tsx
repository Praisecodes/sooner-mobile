import React from 'react';
import { AppStack as AppStacks } from '.';
import Auth from './auth_stack';
import Tabs from './app_tabs';

const AppStack = () => {
  const { Navigator, Screen } = AppStacks;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="auth" component={Auth} />
      <Screen name="app" component={Tabs} />
    </Navigator>
  )
}

export default AppStack;
