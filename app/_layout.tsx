import * as SecureStore from "expo-secure-store";
import {
  ClerkLoaded,
  ClerkProvider,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-expo";
import { Stack } from "expo-router";

export default function RootLayout() {
  const tokenCache = {
    async getToken(key: string) {
      try {
        const item = await SecureStore.getItemAsync(key);
        if (item) {
          console.log(`${key} was used/`);
        } else {
          console.log("no values stored in the cache");
        }
        return item;
      } catch (error) {
        console.log("Error getting the value from the cache");
        await SecureStore.deleteItemAsync(key);
        return null;
      }
    },
    async saveToken(key: string, value: string) {
      try {
        await SecureStore.setItemAsync(key, value);
      } catch (error) {
        console.log("Error saving the value in the cache");
        return;
      }
    },
  };

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    throw new Error("Missing Publishable Key");
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <Stack screenOptions={{ headerShown: false }}>
          <SignedIn>
            <Stack.Screen name="tabs" options={{ headerShown: false }} />
          </SignedIn>
          <SignedOut>
            <Stack.Screen name="index" />
            <Stack.Screen name="auth/sign-in" />
            <Stack.Screen name="auth/sign-up" />
          </SignedOut>
          <Stack.Screen name="index" />
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
