import { View, Text } from 'react-native';
import React from 'react';
import RootLayout from '../../rootLayout';

const Login = () => {
  return (
    <RootLayout>
      <View className={`px-6`}>
        <Text className={`text-white`}>
          Login here
        </Text>
      </View>
    </RootLayout>
  )
}

export default Login;
