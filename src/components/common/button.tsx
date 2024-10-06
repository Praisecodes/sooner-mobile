import { View, Text, TouchableWithoutFeedbackProps, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

interface IButton extends TouchableWithoutFeedbackProps {
  text: string;
}

const Button = (props: IButton) => {
  return (
    <TouchableWithoutFeedback {...props}>
      <View className={`w-full bg-accent py-4 px-5 rounded-full`}>
        <Text className={`text-white font-inter-semibold text-lg text-center`}>
          {props.text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Button