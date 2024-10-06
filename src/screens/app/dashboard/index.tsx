import { View, Text, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import React from 'react';
import RootLayout from '../../rootLayout';
import StatsCard from '../../../components/dashboard/stats_card';
import Streak from '../../../../assets/icons/streak.png';
import ProjectsIcon from '../../../../assets/icons/projects.png';
import Average from '../../../../assets/icons/average.png';
import ProjectCard from '../../../components/projects/project_card';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { AppTabsParamList } from '../../../routers';

const Dashbaord = ({ navigation }: BottomTabScreenProps<AppTabsParamList, "dashboard">) => {
  const stats = {
    "Today": "2h 23m 21s",
    "This week": "2h 23m 21s",
    "This month": "5h 23m 21s",
    "All time": "158h 5m 21s"
  };

  const projects: IProject[] = [
    {
      "name": "sooner",
      "time": 14272910,
      "top_language": "TypeScript",
      "time_human_readable": "3h 57m 52s",
      "url": "/projects/sooner"
    }
  ]

  return (
    <RootLayout>
      <ScrollView>
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
            <View className={`flex flex-row items-center border-b border-b-grey-300 pb-3 mb-4`}>
              <View className={`p-2 rounded-xl bg-grey-300`}>
                <Image source={ProjectsIcon} className={`ios:w-7 ios:h-7 android:h-6 android:w-6`} />
              </View>

              <Text className={`text-white font-inter-semibold ios:text-2xl android:text-xl ml-3`}>
                Projects
              </Text>
            </View>

            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}

            <TouchableWithoutFeedback onPress={() => navigation.navigate("projects")}>
              <View className={`rounded-full border border-grey-300 bg-grey-200 mt-4 py-4 px-5`}>
                <Text className={`text-white text-center font-inter-semibold text-base`}>
                  See All Projects
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </RootLayout>
  )
}

export default Dashbaord;
