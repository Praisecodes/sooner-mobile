import { SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <SafeAreaView className={`flex-1 bg-primary`}>
      <StatusBar backgroundColor='#09090B' style='light' />
      {children}
    </SafeAreaView>
  )
}

export default RootLayout;
