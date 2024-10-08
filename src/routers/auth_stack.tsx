import React from 'react';
import { AuthStack } from '.';
import Onboarding from '../screens/auth/onboarding';
import Login from '../screens/auth/login';
import Signup from '../screens/auth/signup';

const Auth = () => {
  const { Navigator, Screen } = AuthStack;

  return (
    <Navigator screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
      <Screen name="onboarding" component={Onboarding} />
      <Screen name="login" component={Login} />
      <Screen name="signup" component={Signup} />
    </Navigator>
  )
}

export default Auth;
