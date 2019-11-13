# Steps to Create this React App

Previously, I did a blog post about learning React in [https://medium.com/better-programming/learning-react-as-an-angular-developer-e064b3505c21#46f3-c262531eab8](https://medium.com/better-programming/learning-react-as-an-angular-developer-e064b3505c21#46f3-c262531eab8).

Now I want to use things I learned to create a React app. I don't want to create a simple to-do app, so I choose to create a game-progression app inspired by https://github.com/rangle/game-progression, but using React.

Here are the steps I went through to create this app.

## Setup Backend

After I copied the `db.json` and `profile-picture.jpg` to `src/assets` folder. I need to setup a backend that serves db.json.

I need to install NPM library `json-server` for the server and also `npm-run-all` to run multiple commands in parallel.

In package.json, I modified the `start` script:

```
"start": "npm-run-all --parallel start:*",
"start:app": "react-scripts start",
"start:server": "json-server --watch src/assets/db.json --port 3004",
```

## Boilerplate

The first thing I need to do is to create the app using [Create React App](https://github.com/facebook/create-react-app) and install all the NPM libraries I need, such as:

* redux-related (redux, redux-logger)
* router (react-router-dom)
* component-library (@material-ui/core) (Note: this is optional, you may choose to not use a component library)

### Optional: Setup Linting
I added scripts for lint in package.json for linting.
```
"lint": "eslint './src/**/*.{ts,tsx}'",
"lint-fix": "yarn lint --fix"
```
One for just output the lint error, the other one is for automatically fixing it.

Then I added 



