# Steps to Create this React App

Previously, I did a blog post about learning React in [https://medium.com/better-programming/learning-react-as-an-angular-developer-e064b3505c21#46f3-c262531eab8](https://medium.com/better-programming/learning-react-as-an-angular-developer-e064b3505c21#46f3-c262531eab8).

Now I want to use things I learned to create a React app. I don't want to create a simple to-do app, so I choose to create a game-progression app inspired by https://github.com/rangle/game-progression, but using React.

This document is about the steps I went through to create this app. It does not mean it is the only approach to solve this problems. 

## Some Lessons Learnt
- `tachyons` and `material-ui` does not work well with each others. In this project, I have to use nasty `!important` to apply some css styles.
In the future, I would definitely change the css strategies.

## Setup Backend

After I copied the `db.json` and `profile-picture.jpg` to `src/assets` folder. I need to setup a backend that serves db.json.

I need to install NPM library `json-server` for the server and also `npm-run-all` to run multiple commands in parallel.

In package.json, I modified the `start` script:

```
"start": "npm-run-all --parallel start:*",
"start:app": "react-scripts start",
"start:server": "json-server --watch src/assets/db.json --port 3004",
```

Now when I run `yarn start`, it will start the server and app at the same time.

## Boilerplate

The first thing I need to do is to create the app using [Create React App](https://github.com/facebook/create-react-app) and install all the NPM libraries I need, such as:

* redux-related (redux, redux-logger)
* router (react-router-dom)
* component-library (@material-ui/core) (Note: this is optional, you may choose to not use a component library)
* css library (tachyons) (Note: this is also optional)

## Optional: Setup Linting
I added scripts for lint in package.json for linting.
```
"lint": "eslint './src/**/*.{ts,tsx}'",
"lint-fix": "yarn lint --fix"
```
One for just output the lint error, the other one is for automatically fixing it.

## Routing
I use the library `react-router-dom` to setup routing. 

### Nested Routes
This app requires nested routes. 
For example, `/profile` leads to the profile page and `/profile/edit` leads to profile edit page.

So in the App.tsx, the routing looks like:
```
<Route path={Routes.profile} component={ProfileRouter} />
```

In `ProfileRouter` component, this routing looks like:
```
<Route exact path={this.props.match.path} component={ConnectedProfile} />
<Route path={`${this.props.match.path}/edit`} component={ConnectedProfileEdit} />
```

### Redirect
There is a requirement that dashboard and unknown routes should go to `/`, so in App.tsx, there are routings:
```
<Route path={Routes.dashboard}>
  <Redirect to="/" />
</Route>
<Route path="*">
  <Redirect to="/" />
</Route>
```