import React from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-expo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import SignInScreen from "../(auth)/sign-in";
import SignUpScreen from "../(auth)/sign-up";
import HomeTab from "../(tabs)/HomeTab";
import ProfileTab from "../(tabs)/ProfileTab";
import SettingsTab from "../(tabs)/SettingsTab";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ClerkProvider publishableKey="your-clerk-publishable-key">
      <NavigationContainer>
        <SignedIn>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeTab} />
            <Tab.Screen name="Profile" component={ProfileTab} />
            <Tab.Screen name="Settings" component={SettingsTab} />
            <Tab.Screen name="Logout" component={LogoutTab} />
          </Tab.Navigator>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </NavigationContainer>
      <StatusBar style="auto" />
    </ClerkProvider>
  );
}
