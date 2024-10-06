import { View, Text } from 'react-native';
import React from 'react';
import RootLayout from '../../rootLayout';

const Onboarding = () => {
  return (
    <RootLayout>
      <View className={`px-5`}>
        <Text className={`text-white font-inter-semibold text-4xl`}>
          Time tracking for devs and software teams
        </Text>
      </View>
    </RootLayout>
  )
}

export default Onboarding;