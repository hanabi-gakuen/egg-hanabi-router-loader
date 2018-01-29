# egg-hanabi-router-loader

Router loader for hanabi

## Install
Recommend to install this plugin by path.

## Usage

```js
// {app_root}/config/plugin.js
exports.hanabiRouterLoader = {
  enable: true,
  package: 'egg-hanabi-router-loader',
};
```

App will load `app/router.js` from each [load unit](https://eggjs.org/en/advanced/loader.html#loadunit) by default.

## Configuration

```js
// {app_root}/config/config.default.js
exports.hanabiRouterLoader = {
  path: 'app/router.js'
};
```

## License

[MIT](LICENSE)
