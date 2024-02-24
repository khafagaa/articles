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

# App Deep Link Configuration & Steps

- i have add deepLink to navigate to details screen with article object
- to run DeepLink through => run command
   ios :
```bash
yarn && cd ios && pod install
 npx uri-scheme open "myarticle://somepath?author=Natasha%20Turak&title=Turkey%20ends%20hiking%20cycle%20after%208%20months%2C%20holding%20key%20rate%20at%2045%25%20-%20CNBC&urlToImage=https%3A%2F%2Fimage.cnbcfm.com%2Fapi%2Fv1%2Fimage%2F105390644-1533927291657gettyimages-577594748.jpeg%3Fv%3D1708600975%26w%3D1920%26h%3D1080&publishedAt=2024-02-22T11%3A28%3A34Z&content=Turkey%27s%20central%20bank%20held%20its%20key%20interest%20rate%20on%20Thursday%2C%20keeping%20it%20at%2045%25%20despite%20soaring%20inflation%20after%20eight%20consecutive%20months%20of%20hikes.%0AThe%20move%20was%20widely%20expected%20as%20the%20bank%20indicated%20%E2%80%A6%20
" --ios
```
   OR => open browser and past (myarticle://somepath?author=Natasha%20Turak&title=Turkey%20ends%20hiking%20cycle%20after%208%20months%2C%20holding%20key%20rate%20at%2045%25%20-%20CNBC&urlToImage=https%3A%2F%2Fimage.cnbcfm.com%2Fapi%2Fv1%2Fimage%2F105390644-1533927291657gettyimages-577594748.jpeg%3Fv%3D1708600975%26w%3D1920%26h%3D1080&publishedAt=2024-02-22T11%3A28%3A34Z&content=Turkey%27s%20central%20bank%20held%20its%20key%20interest%20rate%20on%20Thursday%2C%20keeping%20it%20at%2045%25%20despite%20soaring%20inflation%20after%20eight%20consecutive%20months%20of%20hikes.%0AThe%20move%20was%20widely%20expected%20as%20the%20bank%20indicated%20%E2%80%A6%20)
  

   android :
 ```bash
   
   npx uri-scheme open "articlescheme://somepath?author=Natasha%20Turak&title=Turkey%20ends%20hiking%20cycle%20after%208%20months%2C%20holding%20key%20rate%20at%2045%25%20-%20CNBC&urlToImage=https%3A%2F%2Fimage.cnbcfm.com%2Fapi%2Fv1%2Fimage%2F105390644-1533927291657gettyimages-577594748.jpeg%3Fv%3D1708600975%26w%3D1920%26h%3D1080&publishedAt=2024-02-22T11%3A28%3A34Z&content=Turkey%27s%20central%20bank%20held%20its%20key%20interest%20rate%20on%20Thursday%2C%20keeping%20it%20at%2045%25%20despite%20soaring%20inflation%20after%20eight%20consecutive%20months%20of%20hikes.%0AThe%20move%20was%20widely%20expected%20as%20the%20bank%20indicated%20%E2%80%A6%20
" --android
```



# GIT FLOW

- uses git flow feature 


# App Demo

 ```bash
https://drive.google.com/file/d/1Ymnyb2S-J5vCa6yZFxBpm3UO8Hgotocc/view?usp=sharing
```
