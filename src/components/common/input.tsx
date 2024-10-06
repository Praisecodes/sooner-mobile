import { View, TextInputProps, TextInput } from 'react-native';
import React from 'react';

interface Props extends TextInputProps { }

const Input = (props: Props) => {
  return (
    <TextInput
      className={`border-[0.5px] border-grey-300 focus:border-accent py-4 px-4 rounded-[18px] text-white font-inter text-base`}
      placeholderTextColor={"#a3a3a3"}
      {...props}
    />
  )
}

export default Input;
