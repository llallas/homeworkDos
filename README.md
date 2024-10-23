## Description

MyTabApp is a React Native Expo application that features a tab-based navigation system. The app includes authentication (sign-up, sign-in, sign-out) and only allows users to access the main screens when they are signed in.

### Features:

- Home, Profile, and Settings tabs with consistent styling and images.
- A Log Out button to sign out and return to the login screen.
- Image incorporation to each tab view.

### GitHub:

# This starter repo is for Clerk Authentication

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started Using This Project

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

## These are the instructions to further develop your app

1.  We have already reset the app
2.  After you hit start and you get errors. Make sure you add Clerk to your project. You can signup for Clerk, [here](https://clerk.com/).

```bash
   npm install @clerk/clerk-expo
```

3. If you haven't yet don't forget to add your .evn file and put your environment variable you get from Clerk in there. You will have to restart your project for this file to load.

4. We are also working with React Native Paper components. You can find it,[here](https://reactnativepaper.com/).

   ```bash
      npm install react-native-paper
      npm install react-native-safe-area-context
      npm install react-native-vector-icons
   ```

5. Your project should be running at this point. You will not have authentication added at this point, but it will run.

### These instructions will show you how to load your project in mobile.

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.
