# React App with Webpack and Api :japanese_goblin:

```
node 5
git clone
npm install babel babel-preset-es5015 babel-preset-react babel-polyfill babel-loader -g
npm install whatwg-fetch //for fetching data from api
npm install
npm start // start script start in package.json
```
  >**All my devDependencies**
  ```
  "devDependencies": {
    "babel-core": "^6.9.0",
    "babel-loader": "^6.2.4",
    "babel-plugin-react-transform": "^2.0.2",
    "babel-plugin-transform-runtime": "^6.9.0",
    "babel-polyfill": "^6.9.0",
    "babel-preset-es2015": "^6.9.0",
    "babel-preset-react": "^6.5.0",
    "babel-preset-stage-0": "^6.5.0",
    "babel-runtime": "^6.9.0",
    "es6-promise": "^3.2.1",
    "eslint": "^2.10.2",
    "eslint-loader": "^1.3.0",
    "eslint-plugin-react": "^5.1.1",
    "react-addons-perf": "^15.1.0",
    "react-hot-loader": "^1.3.0",
    "webpack": "^1.13.0",
    "webpack-dev-server": "^1.14.1"
  }
  ```

  >**Important it's not ready  yet!**  
You will find the master branch is a React - Todo - App that will fetch data from an Api http://kanbanapi.pro-react.com/  and we'll use **Flux or Redux**.

1.  Manipulating taskCallbacks: toggleTask, deleteTask, addTask, toggleTask
    * Be carefull with Card.js Component //
      ```
      ej: <Card key={card.id} id={card.id} />
       ```
```
npm install --save react-addons-update
  // now inside App.js import update from 'react-addons-update'
npm install --save babel-polyfill //used for features in es6
```

2. Animating Components in React
    * If you know about cc3 animation like transition, keyframes your ok.

```
npm install --save react-addons-css-transition-group

```
