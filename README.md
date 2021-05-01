# vue-registration-form
This is a simple Vue.js application that simulates an event registration form step-by-step.

The application uses `yarn` as deplendency manager.
### Application setup
Once the repository is cloned move to the main folder an run
```
yarn install
```
to install all the needed dependecies.
### Application functional test
To *try* the application for testing purposes it can be served on `localhost` with
```
yarn serve
```
it will run by default on port `8080`; if you need to serve it on another port, you can do it with
```
yarn serve --port <port>
```
### Developing with Visual Studio Code
This project takes advantage of [Remote Container](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension for Visual Studio Code, that allows the developer to work in a pre-configured docker environment without the need to install anything locally.