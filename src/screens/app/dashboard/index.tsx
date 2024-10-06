import { View, Text, Image } from 'react-native';
import React from 'react';
import RootLayout from '../../rootLayout';
import StatsCard from '../../../components/dashboard/stats_card';
import Streak from '../../../../assets/icons/streak.png';
import ProjectsIcon from '../../../../assets/icons/projects.png';
import Average from '../../../../assets/icons/average.png';

const Dashbaord = () => {
  const stats = {
    "Today": "2h 23m 21s",
    "This week": "2h 23m 21s",
    "This month": "5h 23m 21s",
    "All time": "158h 5m 21s"
  };

  return (
    <RootLayout>
      <View className={`px-5 py-4`}>
        <StatsCard stats={stats} />

        <View className={`flex flex-row items-center justify-center mt-8`}>
          <View className={`flex-1 min-h-20 bg-grey-200 px-4 py-4 rounded-3xl`}>
            <View className={`p-2 bg-grey-300 self-start rounded-lg`}>
              <Image source={Streak} className={`w-6 h-6`} />
            </View>

            <Text className={`font-inter-semibold text-lg text-white mt-2`}>
              Streak
            </Text>

            <Text className={`mt-8 text-white text-2xl font-inter-semibold`}>
              17 days
            </Text>
          </View>

          <View className={`w-2.5`} />

          <View className={`flex-1 min-h-20 bg-grey-200 px-4 py-4 rounded-3xl`}>
            <View className={`p-2 bg-grey-300 self-start rounded-lg`}>
              <Image source={Average} className={`w-6 h-6`} />
            </View>

            <Text className={`font-inter-semibold text-lg text-white mt-2`}>
              Daily average
            </Text>

            <Text className={`mt-8 text-white text-2xl font-inter-semibold`}>
              1h 8m 45s
            </Text>
          </View>
        </View>

        <View className={`mt-8 bg-grey-200 p-5 rounded-3xl`}>
          <View className={`flex flex-row items-center border-b border-b-grey-300 pb-3`}>
            <View className={`p-2 rounded-xl bg-grey-300`}>
              <Image source={ProjectsIcon} className={`w-7 h-7`} />
            </View>

            <Text className={`text-white font-inter-semibold text-2xl ml-3`}>
              Projects
            </Text>
          </View>
        </View>
      </View>
    </RootLayout>
  )
}

export default Dashbaord;
