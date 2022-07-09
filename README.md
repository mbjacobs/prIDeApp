# prIDe

## Overview
prIDe is a Pride flag identifier designed to teach users how to recognize flags within the LGBTQIA+ community. 

## For Users
Do you recognize more Pride flags than country flags? Do you find yourself struggling to identify a flag within the LGBTQIA+ community? Do you recognize the standard Pride flag (🏳️‍🌈) but were unaware that there are dozens more flags to represent the diverse identities in the queer community?

Whether you want to test your excellent Pride flag knowledge or just start to familiarize yourself with the rainbow of colors and patterns, this app is for you.

## For Developers

### Project Organization

The project repo is organized according to the suggested method [here](https://www.reactnative.guide/5-project-structure-and-start-building-some-app/5.1-customising-the-structure.html):
* app/assets - Images, videos, etc.
* app/config - Configurations for the app. For example, environment specific configs for dev and prod, etc.
* app/styles - Global styles, themes, and mixins.
* app/utils - Services/utility files such as HTTP utility to make API calls, storage utility, data transformation utility, etc.
* app/components - The directory will contain all the dumb components. In short, these components will only do layouting and won't contain any states or business logic inside them. All the data to these components will be passed in as props. This concept will be explained in detail further in the book.
* app/pages - This directory will hold all the smart components. Smart components are those components which contain business logic and states in them. Their job is to pass the props to the dumb components after all the business logic has been executed.
* app/routes - App's routing logic. Contains the map between the pages(smart components) and the routes.
* app/redux - Redux state management files like actions, reducers, store config, thunks etc.


### Built With

* [ReactNative](https://reactnative.dev/) - A mobile development framework for building native apps in React
* [Expo](https://expo.io/) - An open-source framework and platform for React app
* [Firebase](https://firebase.google.com/) - A mobile app development platform offering backend as a service

## Authors

* **Mariah Jacobs** - [mbjacobs](https://github.com/mbjacobs)

## Acknowledgments

This is a solo personal project developed with the intent of increasing awareness and acceptance of the LBGTQIA+ community by educating users about Pride flags and identities.

Just because I developed it independently doesn't mean I didn't lean on the support of others who came before me and the resources that they provided. Thanks to the following for their help in this project:

* Mark Newman's [SI 669: Developing Mobile Experiences](https://www.si.umich.edu/programs/courses/669) at the University of Michigan - School of Information, where I first learned React Native development
* open source book [React Native Made Easy](https://github.com/react-made-native-easy/book)