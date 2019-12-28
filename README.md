# awewinds

## Tailwind CSS Easy Setup

### Configure your create-react-app or vue-cli project with Tailwind CSS quickly!

##### On your root project run:

```
$ npx awewinds
```

## Instructions

##### Open your package.json file, modify and add the next lines to "scripts" section:

```
"build:css":"tailwind build src/css/index.css -o src/css/tailwind.css",
"start": "npm run build:css && react-scripts start",
```

##### Import your CSS in the index.js file

```
import './css/tailwind.css';
```

##### And that's all!

##### Please, if my tool help you, consider give a star! Thanks!
