import { View, Text, useWindowDimensions, Image } from 'react-native'
import React from 'react'

const OnboardingCard = ({ text, image }: { text: string; image: any; }) => {
  const { width: WIDTH } = useWindowDimensions();

  return (
    <View style={{ width: WIDTH }} className={`flex relative flex-col justify-end px-6 pb-10 overflow-hidden`}>
      <View className={`absolute -top-28 -right-28 opacity-70 w-72 h-72 p-6 bg-white rounded-full`}>
        <View className={`w-full h-full bg-primary rounded-full`} />
      </View>

      <Image
        source={image}
        width={200}
        height={200}
        className={`w-[200px] h-[200px] mb-7`}
      />
      <Text className={`text-white font-inter-semibold text-3xl`}>
        {text}
      </Text>
    </View>
  )
}

export default OnboardingCard;
