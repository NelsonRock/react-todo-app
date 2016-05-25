# React App with Webpack and Api :japanese_goblin:

```
node 5
git clone
npm install babel babel-preset-es5015 babel-preset-react babel-polyfill babel-loader -g
npm install -g whatwg-fetch
npm install
npm start // start command start in package.json
```
  >**All my devDependencies**
  ```
  "devDependencies": {
    "babel-core": "^6.9.0",
    "babel-loader": "^6.2.4",
    "babel-polyfill": "^6.9.0",
    "babel-preset-es2015": "^6.9.0",
    "babel-preset-react": "^6.5.0",
    "eslint": "^2.10.2",
    "eslint-loader": "^1.3.0",
    "eslint-plugin-react": "^5.1.1",
    "webpack": "^1.13.0",
    "webpack-dev-server": "^1.14.1"
  }
  ```

  >**Important it's not ready  yet!**  
You will find the master branch is a React - Todo - App that will fetch data from an Api http://kanbanapi.pro-react.com/  and we'll use **Flux as well**.

1.  Manipulating taskCallbacks: toggleTask, deleteTask, addTask we'll use react-addons-update from React's immutability helpers
```
npm install --save react-addons-update
```
