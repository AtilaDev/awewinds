# awewinds <img alt="awewinds version" src="https://img.shields.io/npm/v/awewinds.svg?style=flat-square&label=Version&labelColor=000000&color=3c6382">

## Tailwind CSS Easy Setup

### Configure your create-react-app, gatsby or vue-cli project with Tailwind CSS quickly!

NOTE: awewinds is only a quick installer for tailwind in your projects. The truly magic does it:

- Credit to Adam Wathan, creator of [Tailwind CSS](https://tailwindcss.com/).

##### On your root project run:

```
$ npx awewinds
```

or

```
$ npm install -g awewinds
```

## Instructions

## create-react-app

##### Open your package.json file, modify and add the next lines to "scripts" section:

```shell
"build:css":"tailwind build src/css/index.css -o src/css/tailwind.css",
"start": "npm run build:css && react-scripts start",
```

##### Import your CSS in the index.js file

```shell
import './css/tailwind.css';
```

## Gatsby

##### Open your package.json file, modify and add the next lines to "scripts" section:

```shell
"build:css":"tailwind build src/css/index.css -o src/css/tailwind.css",
"start": "npm run build:css && npm run develop",
```

##### Import your CSS in the ./pages/index.js file

```shell
import '../css/tailwind.css';
```

##### Run your project

```shell
npm start
```

## Vue cli

##### Open your package.json file, modify and add the next lines to "scripts" section:

```shell
"build:css":"tailwind build src/css/index.css -o src/css/tailwind.css",
"serve": "npm run build:css && vue-cli-service serve",
```

##### Import your CSS in the main.js file

```
import './css/tailwind.css';
```

---

## License

[MIT](https://github.com/AtilaDev/awewinds/blob/master/LICENSE)
