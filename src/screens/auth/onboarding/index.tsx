import { View, FlatList, useWindowDimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import RootLayout from '../../rootLayout';
import Button from '../../../components/common/button';
import OnboardingCard from '../../../components/onboarding/onboarding_card';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../routers';

const Onboarding = ({ navigation }: NativeStackScreenProps<AuthStackParamList, "onboarding">) => {
  const { width } = useWindowDimensions();
  const [index, setIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);
  const onboarding_data = [
    {
      "text": "Time tracking for devs and software teams.",
      "image": require("../../../../assets/logo.png")
    },
    {
      "text": "Gain valuable insights into coding time and productivity.",
      "image": require("../../../../assets/logo.png")
    },
    {
      "text": "Detailed metrics to enhance performance and identify bottlenecks",
      "image": require("../../../../assets/logo.png")
    },
  ];

  const onButtonPressed = () => {
    if (index !== 2) {
      flatListRef.current?.scrollToIndex({ index: index + 1, animated: true });
    } else {
      navigation.navigate("login");
    }
  }

  return (
    <RootLayout>
      <View className={`flex-1`}>
        <FlatList
          ref={flatListRef}
          data={onboarding_data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (<OnboardingCard text={item.text} image={item.image} />)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => {
            let scrollPosition = e.nativeEvent.contentOffset.x;
            let index = scrollPosition / width;
            setIndex(Math.round(index));
          }}
        />
      </View>

      <View className={`py-5 px-6 w-full`}>
        <Button
          text={index === 2 ? 'Get Started' : 'Continue'}
          onPress={onButtonPressed}
        />
      </View>
    </RootLayout>
  )
}

export default Onboarding;