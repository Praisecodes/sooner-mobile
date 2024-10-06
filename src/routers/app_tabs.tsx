import React from 'react';
import { AppTabs } from '.';
import Dashbaord from '../screens/app/dashboard';
import {
  Home,
  HomeSelected,
  Folder,
  FolderSelected,
  Chart,
  ChartSelected,
  Settings as SettingsIcon,
  SettingsSelected,
  Bug,
  BugSelected
} from '../../assets/icons/tabs';
import { Image } from 'react-native';
import Projects from '../screens/app/projects';
import Insights from '../screens/app/insights';
import Settings from '../screens/app/settings';
import BugReport from '../screens/app/bug_report';

const Tabs = () => {
  const { Navigator, Screen } = AppTabs;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#09090B",
          borderTopColor: "#09090B",
          borderWidth: 0,
          elevation: 0
        },
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name="dashboard"
        component={Dashbaord}
        options={{
          tabBarIcon: ({ focused }) => (
            !focused ? <Image source={Home} className={`w-6 h-6`} /> : <Image source={HomeSelected} className={`w-6 h-6`} />
          )
        }}
      />

      <Screen
        name="projects"
        component={Projects}
        options={{
          tabBarIcon: ({ focused }) => (
            !focused ? <Image source={Folder} className={`w-[23px] h-[21px]`} /> : <Image source={FolderSelected} className={`w-[23px] h-[21px]`} />
          )
        }}
      />

      <Screen
        name="insights"
        component={Insights}
        options={{
          tabBarIcon: ({ focused }) => (
            !focused ? <Image source={Chart} className={`w-6 h-6`} /> : <Image source={ChartSelected} className={`w-6 h-6`} />
          )
        }}
      />

      <Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            !focused ? <Image source={SettingsIcon} className={`w-6 h-6`} /> : <Image source={SettingsSelected} className={`w-6 h-6`} />
          )
        }}
      />

      <Screen
        name="bug_report"
        component={BugReport}
        options={{
          tabBarIcon: ({ focused }) => (
            !focused ? <Image source={Bug} className={`w-6 h-6`} /> : <Image source={BugSelected} className={`w-6 h-6`} />
          )
        }}
      />
    </Navigator>
  )
}

export default Tabs;
