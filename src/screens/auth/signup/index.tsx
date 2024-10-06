import { View, Text, Image, Keyboard, TextInput } from 'react-native';
import React, { useRef } from 'react';
import Button from '../../../components/common/button';
import RootLayout from '../../rootLayout';
import Input from '../../../components/common/input';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../routers';

const Signup = ({ navigation }: NativeStackScreenProps<AuthStackParamList, "signup">) => {
  const refs = useRef<(TextInput | null)[]>([]);
  const formik = useFormik({
    initialValues: {
      "email": "",
      "username": "",
      "password": "",
    },
    onSubmit: ({ email, username, password }) => {
      console.log(email, username, password);
    },
    validationSchema: object({
      email: string().email("Please enter a valid email").required("Email is required"),
      username: string().required("Username is required"),
      password: string().required("Password is required")
    })
  });

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

          <View className={`mt-12`}>
            <Text className={`font-inter-semibold text-2xl w-[80%] mx-auto text-white text-center`}>
              Create an account with Sooner!
            </Text>

            <View className={`mt-8`}>
              <Input
                placeholder='Email'
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
                keyboardType="email-address"
                returnKeyType="next"
                returnKeyLabel="Next"
                onSubmitEditing={() => {
                  refs.current[1]?.focus();
                }}
                ref={(el: any) => refs.current[0] = el}
              />
            </View>

            <View className={`mt-4`}>
              <Input
                placeholder='Username'
                value={formik.values.username}
                onChangeText={formik.handleChange('username')}
                ref={(el: any) => refs.current[1] = el}
                returnKeyType="next"
                returnKeyLabel="Next"
                onSubmitEditing={() => {
                  refs.current[2]?.focus();
                }}
              />
            </View>

            <View className={`mt-4`}>
              <Input
                placeholder='Password'
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
                ref={(el: any) => refs.current[2] = el}
                returnKeyType="done"
                returnKeyLabel="Done"
                onSubmitEditing={Keyboard.dismiss}
              />
            </View>

            <View className={`w-full mt-12`}>
              <Button
                text='Continue'
                onPress={() => formik.handleSubmit()}
              />
            </View>
          </View>
        </View>

        <Text className={`text-white text-center text-base font-inter`}>
          Already have an account? <Text onPress={() => { navigation.navigate("login"); }} className={`font-inter-semibold text-accent`}>Sign in</Text>
        </Text>
      </View>
    </RootLayout>
  )
}

export default Signup;
