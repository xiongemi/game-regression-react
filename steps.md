# Steps to Create this React App

Previously, I did a blog post about learning React in [https://medium.com/better-programming/learning-react-as-an-angular-developer-e064b3505c21#46f3-c262531eab8](https://medium.com/better-programming/learning-react-as-an-angular-developer-e064b3505c21#46f3-c262531eab8).

Now I want to use things I learned to create a React app. I don't want to create a simple to-do app, so I choose to create a game-progression app inspired by https://github.com/rangle/game-progression, but using React.

All user stories are from https://github.com/rangle/game-progression/tree/master/docs/user-stories.

## Boilerplate

The first thing I need to do is to create the app using [Create React App](https://github.com/facebook/create-react-app) and install all the NPM libraries I need, such as:

* redux-related (redux, redux-logger)
* linting-related

### Linting
I added scripts for lint in package.json for linting.
```
"lint": "eslint './src/**/*.{ts,tsx}'",
"lint-fix": "yarn lint --fix"
```
One for just output the lint error, the other one is for automatically fixing it.

Then I added 

