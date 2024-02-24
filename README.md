# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.
>
## Step 0: Install dependencies 

 ```bash
# using yarn
yarn && cd ios && pod install
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

# APP Architecture 

- i have applied MVVM (Model-View-ViewModel) architecure
- (View): Represents the UI components
- (Model): Represents the data and business logic, Redux manages the application state, and RTK handles API communication
- (ViewModel): Acts as an intermediary between the View and the Model. such as React Components and Hooks.
