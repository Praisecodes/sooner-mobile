import { View, TextInputProps, TextInput } from 'react-native';
import React, { forwardRef } from 'react';

interface Props extends TextInputProps { }

const Input = forwardRef<TextInput, Props>((props, ref) => {
  return (
    <TextInput
      className={`border-[0.5px] border-grey-300 focus:border-accent pt-4 pb-5 px-4 rounded-[18px] text-white font-inter text-base`}
      placeholderTextColor={"#a3a3a3"}
      {...props}
      ref={ref}
    />
  )
})

export default Input;
