import { View, Text, Image } from 'react-native';
import React from 'react';
import RootLayout from '../../rootLayout';
import Input from '../../../components/common/input';
import Button from '../../../components/common/button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../routers';

const Login = ({ navigation }: NativeStackScreenProps<AuthStackParamList, "login">) => {
  return (
    <RootLayout>
      <View className={`px-6 pt-14 pb-8 flex-1`}>
        <View className={`flex-1`}>
          <View className={`mx-auto`}>
            <Image
              source={require('../../../../assets/logo.png')}
              className={`w-[100px] h-[100px]`}
            />
          </View>

          <View className={`mt-16`}>
            <Text className={`font-inter-semibold text-2xl text-white text-center`}>
              Sign in to Sooner!
            </Text>

            <View className={`mt-10`}>
              <Input
                placeholder='Email'
              />
            </View>

            <View className={`mt-4`}>
              <Input
                placeholder='Password'
                secureTextEntry={true}
              />
            </View>

            <View className={`w-full mt-12`}>
              <Button
                text='Login'
              />
            </View>
          </View>
        </View>

        <Text className={`text-white text-center text-base font-inter`}>
          Don't have an account? <Text onPress={() => { navigation.navigate("signup"); }} className={`font-inter-semibold text-accent`}>Get Started</Text>
        </Text>
      </View>
    </RootLayout>
  )
}

export default Login;
