# awewinds <img alt="awewinds version" src="https://img.shields.io/npm/v/awewinds.svg?style=flat-square&label=Version&labelColor=000000&color=3c6382">

## Tailwind CSS Easy Setup

### Configure your create-react-app or vue-cli project with Tailwind CSS quickly!

##### On your root project run:

```
$ npx awewinds
```

## Instructions

### CRA

##### Open your package.json file, modify and add the next lines to "scripts" section:

```
"build:css":"tailwind build src/css/index.css -o src/css/tailwind.css",
"start": "npm run build:css && react-scripts start",
```

##### Import your CSS in the index.js file

```
import './css/tailwind.css';
```

### VUE-CLI

##### Open your package.json file, modify and add the next lines to "scripts" section:

```
"build:css":"tailwind build src/css/index.css -o src/css/tailwind.css",
"serve": "npm run build:css && vue-cli-service serve",
```

##### Import your CSS in the main.js file

```
import './css/tailwind.css';
```

### EXPO WEB

##### Open your package.json file, modify and add the next lines to "scripts" section:

```
"build:css": "tailwind build css/index.css -o css/tailwind.css",
"web": "npm run build:css && expo start --web",
```

##### Import your CSS in the App.js file

```
import './css/tailwind.css';
```

##### And that's all!

##### Please, if my tool help you, consider give me a star! Thanks!
