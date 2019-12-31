# awewinds <img alt="awewinds version" src="https://img.shields.io/npm/v/awewinds.svg?style=flat-square&label=Version&labelColor=000000&color=3c6382">

## Tailwind CSS Easy Setup

### Configure your create-react-app, gatsby, vue-cli or Expo (Web & Mobile) project with Tailwind CSS quickly!

##### On your root project run:

```
$ npx awewinds or npm install -g awewinds
```

## Instructions

## CRA

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

##### Import your CSS in the index.js file

```shell
import '../css/tailwind.css';
```

##### Run your project

```shell
npm start
```

## VUE-CLI

##### Open your package.json file, modify and add the next lines to "scripts" section:

```shell
"build:css":"tailwind build src/css/index.css -o src/css/tailwind.css",
"serve": "npm run build:css && vue-cli-service serve",
```

##### Import your CSS in the main.js file

```
import './css/tailwind.css';
```

## Expo

### IMPORTANT! This is experimental.

The fantastic [Tailwind CSS](https://github.com/tailwindcss/tailwindcss), for React Native!  
Credit to [Taylor Bryant](https://github.com/taylorbryant/crna-tailwind) for originally translating the classes over to RN.

Credit to [Jake Broughton](https://github.com/MythicalFish/react-native-tailwind) for React Native Tailwind

##### Import the components

```shell
import { View, Text } from 'react-native-tailwind';
```

##### Use utility classes

```shell
const HelloWorld = ({ hello }) => (
  <View className="flex-1 items-center justify-center bg-grey-darkest">
    <Text className="text-white p-4">{hello}</Text>
  </View>
)
```

To see which classes are supported, see [tailwind.js](https://github.com/MythicalFish/react-native-tailwind/blob/master/src/lib/tailwind.js).

And that's all!

Please, if my tool help you, consider give me a star! Thanks!

---

## License

[MIT](https://github.com/AtilaDev/awewinds/blob/master/LICENSE)
