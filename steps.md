# Steps to Create this React App

Previously, I did a blog post about learning React in [https://medium.com/better-programming/learning-react-as-an-angular-developer-e064b3505c21#46f3-c262531eab8](https://medium.com/better-programming/learning-react-as-an-angular-developer-e064b3505c21#46f3-c262531eab8).

Now I want to use things I learned to create a React app. I don't want to create a simple to-do app, so I choose to create a game-progression app inspired by https://github.com/rangle/game-progression, but using React.

This document is about the steps I went through to create this app. It does not mean it is the only approach to solve this problems. 

## TLTR

### Something I learnt
- `tachyons` and `material-ui` do work well together. In this project, I have to use nasty `!important` to apply some css styles.
In the future, I would definitely change the css strategies.

### Something I liked and probably keep doing for next React Projects
- add a `lint --fix` command: this command will automatically fix linting errors and prettify the code.
  - add ordered imports as a part of eslint rules, so every time when I run the `lint --fix` command, it will automatically order imports for me. (It helps me with my OCD.)
- add the router a part of redux state

### Something I will try for next React Projects
- use function to create component rather than class: a lot of documents about how to use libraries like `i18next` and `react-router-dom` only has example when components are created using functions.
I have to do deeper searches to find out how to use class components. Also, it seems require less setups to integrate component with those libraries (using hooks rather than HOCs).

## Steps

### Setup Backend

After I copied the `db.json` and `profile-picture.jpg` to `src/assets` folder. I need to setup a backend that serves db.json.

I need to install NPM library `json-server` for the server and also `npm-run-all` to run multiple commands in parallel.

In package.json, I modified the `start` script:

```
"start": "npm-run-all --parallel start:*",
"start:app": "react-scripts start",
"start:server": "json-server --watch src/assets/db.json --port 3004",
```

Now when I run `yarn start`, it will start the server and app at the same time.

### Boilerplate

The first thing I need to do is to create the app using [Create React App](https://github.com/facebook/create-react-app) and install all the NPM libraries I need, such as:

* redux-related (redux, redux-logger)
* router (react-router-dom)
* component-library (@material-ui/core) (Note: this is optional, you may choose to not use a component library)
* css library (tachyons) (Note: this is also optional)

### Optional: Setup Linting
I added scripts for lint in package.json for linting.
```
"lint": "eslint './src/**/*.{ts,tsx}'",
"lint-fix": "yarn lint --fix"
```
One for just output the lint error, the other one is for automatically fixing it.

### Routing
I use the library `react-router-dom` to setup routing. 

#### Nested Routes
This app requires nested routes. 
For example, `/profile` leads to the profile page and `/profile/edit` leads to profile edit page.

So in the App.tsx, the routing looks like:
```
<Route path={Routes.profile} component={ProfileRouter} />
```

In `ProfileRouter` component, this routing looks like:
```
<Route exact path={this.props.match.path} component={ProfileViewContainer} />
<Route path={`${this.props.match.path}/edit`} component={ProfileEditContainer} />
```

#### Redirect
There is a requirement that dashboard and unknown routes should go to `/`, so in App.tsx, there are routings:
```
<Route path={Routes.dashboard}>
  <Redirect to="/" />
</Route>
<Route path="*">
  <Redirect to="/" />
</Route>
```

#### Determine What is Current Location
There is as requirement to highlight a menu button if the user is on that page.
To achieve this, I found this example: [https://reacttraining.com/react-router/web/example/custom-link](https://reacttraining.com/react-router/web/example/custom-link).

However, I am using class styled component, I could not use hooks. So I use a HOC approach that uses [withRouter](https://reacttraining.com/react-router/web/api/withRouter), so in the code, I did something similar to:
```
export const MenuContainer = withRouter(Menu);
```
This will add `RouteComponentProps` (`{ match, location, history }`) to `this.props` in `Menu` component.

So in the `Menu`, I have access to `location` to determine the current url location.