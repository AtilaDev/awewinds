#!/usr/bin/env node
const figlet = require('figlet');
const inquirer = require('inquirer');
const pathBase = process.cwd();
const fs = require('fs');
const chalk = require('chalk');
const exec = require('child_process').exec;
const { set } = require('edit-package-json');

let package = require('./package.json');

// Mostrar un banner con un mensaje formado por caracteres.
const msn = msn => {
  console.log(
    chalk.bold.cyan(
      figlet.textSync(msn, {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  );
};

// Preguntas que se van a realizar y que más tarde usaremos
const queryParams = () => {
  const qs = [
    {
      name: 'type',
      type: 'list',
      message: 'React or Vue project: ',
      choices: ['React', 'Vue']
    }
  ];

  return inquirer.prompt(qs);
};

function reactJS() {
  console.log(chalk.cyanBright('Installing Tailwind CSS in ReactJS...'));

  // Creacion de carpetas y ficheros de configuracion

  // let str = JSON.stringify(package);
  // let json = set(
  //   str,
  //   'scripts.start',
  //   'tailwind build src/css/index.css -o src/css/tailwind.css && react-scripts start'
  // );

  // fs.writeFile('./package.json', json, function(err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  // });

  // let postcssConfig = `const tailwindcss = require('tailwindcss');\nmodule.exports = {\n\tplugins: [\n\t\ttailwindcss('./tailwind.js'), require('autoprefixer')\n\t]\n};`;

  // fs.writeFile('./postcss.config.js', postcssConfig, function(err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  // });

  // fs.mkdir('./src/css', function(err) {
  //   if (err) {
  //     return console.log(err);
  //   }

  //   let indexCSS = `@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;`;

  //   fs.writeFile('./src/css/index.css', indexCSS, function(err) {
  //     if (err) {
  //       return console.log(err);
  //     }
  //   });

  //   fs.writeFile('./src/css/tailwind.css', '', function(err) {
  //     if (err) {
  //       return console.log(err);
  //     }
  //   });
  // });

  // Instalacion de librerias
  // exec(
  //   'npm install tailwindcss --dev && npm install postcss-cli autoprefixer --save-dev && npx tailwind init tailwind.js --full',
  //   (err, stdout, stderr) => {
  //     if (err) {
  //       console.error(`exec error: ${err}`);
  //       return;
  //     }
  //     console.log(`stdout: ${stdout}`);
  //     console.log(chalk.cyanBright('Tailwind CSS installed in your project!'));
  //   }
  // );
}

function vueJS() {
  // console.log(chalk.greenBright('Installing Tailwind CSS in VueJS...'));
  console.log(chalk.greenBright('Coming soon... ;)'));
}

// IIFE (Immediately Invoked Function Expression)
(async () => {
  msn('awewinds');
  let { type } = await queryParams();

  switch (type) {
    case 'React':
      reactJS();
      break;

    case 'Vue':
      vueJS();
      break;
  }
})();
