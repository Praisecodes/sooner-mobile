import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type AuthStackParamList = {
  onboarding: undefined;
  signup: undefined;
  login: undefined;
}

type AppTabsParamList = {
  dashboard: undefined;
  projects: undefined;
  insights: undefined;
  settings: undefined;
  bug_report: undefined;
}

type AppStackParamList = {
  app: NavigatorScreenParams<AppTabsParamList>;
  auth: NavigatorScreenParams<AuthStackParamList>;
}

const AppStack = createNativeStackNavigator<AppStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppTabs = createBottomTabNavigator<AppTabsParamList>();

export {
  AppStackParamList,
  AuthStackParamList,
  AppTabsParamList,
  AppStack,
  AuthStack,
  AppTabs,
};
