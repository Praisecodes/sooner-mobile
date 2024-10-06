import { View, Text, FlatList, LayoutChangeEvent } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  stats: {
    "Today": string;
    "This week": string;
    "This month": string;
    "All time": string;
  }
}

const StatsCard = ({ stats }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setWidth(width);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === ((Object.keys(stats).length) - 1)) {
        flatListRef.current?.scrollToIndex({ index: 0, animated: false });
        setCurrentIndex(0);
      } else {
        flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
        // setCurrentIndex(currentIndex + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View className={`bg-grey-200 pb-3 mt-5 w-full rounded-3xl`} onLayout={handleLayout}>
      <View className={``}>
        <FlatList
          ref={flatListRef}
          data={Object.values(stats)}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={{ width }} className={`flex flex-row items-center px-6 py-5`}>
              <View className={`flex-1`}>
                <Text className={`text-white font-inter text-base`}>
                  {Object.keys(stats)[index]}
                </Text>

                <Text className={`text-white font-inter-semibold text-lg mt-2.5`}>
                  {item}
                </Text>
              </View>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={(e) => {
            let scrollPosition = e.nativeEvent.contentOffset.x;
            let index = scrollPosition / width;
            setCurrentIndex(Math.round(index));
          }}
        />
      </View>

      <View className={`flex flex-row items-center justify-center`}>
        {Object.keys(stats).map((_, index) => (
          <View className={`rounded-full ${currentIndex === index ? "bg-white w-1.5 h-1.5 " : "bg-grey-100 w-1 h-1"} mx-1`} key={index} />
        ))}
      </View>
    </View>
  )
}

export default StatsCard;
