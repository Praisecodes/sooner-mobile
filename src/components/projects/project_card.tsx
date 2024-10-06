import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import Colors from '../../../colors.json';

interface Props {
  project: IProject
}

const ProjectCard = ({ project }: Props) => {
  return (
    <TouchableWithoutFeedback>
      <View className={`w-full bg-grey-200 rounded-3xl border-[0.4px] border-grey-300 py-4 px-5`}>
        <Text className={`text-white font-inter text-lg`}>
          {project.name}
        </Text>

        <Text className={`my-4 font-inter-semibold text-2xl text-white`}>
          {project.time_human_readable}
        </Text>

        <View className={`flex flex-row items-center mt-1.5`}>
          <View
            className={`w-2 h-2 rounded-full`}
            style={{
              // @ts-ignore
              backgroundColor: Colors[project.top_language].color
            }}
          />

          <Text className={`text-white font-inter-semibold ml-3 text-base`}>
            {project.top_language}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ProjectCard;
