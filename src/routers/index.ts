import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type AuthStackParamList = {
  onboarding: undefined;
  signup: undefined;
  login: undefined;
}

type AppStackParamList = {
  app: undefined;
  auth: NavigatorScreenParams<AuthStackParamList>;
}

const AppStack = createNativeStackNavigator<AppStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export {
  AppStackParamList,
  AuthStackParamList,
  AppStack,
  AuthStack
};
