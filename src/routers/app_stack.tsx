import React from 'react';
import { AppStack as AppStacks } from '.';
import Auth from './auth_stack';

const AppStack = () => {
  const { Navigator, Screen } = AppStacks;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="auth" component={Auth} />
    </Navigator>
  )
}

export default AppStack;
