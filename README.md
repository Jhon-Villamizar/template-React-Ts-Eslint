# Template React Ts Scss Eslint
## _by some proyects with this especifications_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This is a proyect with the goal of having a react teamplete with Typescript, EsLint, sass and redux configuration

## Tech

Actully versións dependencies:
| library | Versión |
| ------ | ------ |
| @testing-library/jest-dom | ^5.14.1 |
| @testing-library/react | ^11.2.7 |
| @testing-library/user-event | ^12.8.3 |
| @types/jest | ^26.0.24 |
| @types/node | ^12.20.18 |
| @types/react | ^17.0.16 |
| @types/react-dom | ^17.0.9 |
| node-sass | ^6.0.1 |
| react | ^17.0.2 |
| react-dom | ^17.0.2 |
| react-scripts | 4.0.3 |
| typescript | ^4.3.5 |
| web-vitals | ^1.1.2 |

The dependencies will be updated as and when required

## Installation


1 Create the project with:
```sh
npx create-react-app "name" --template typescript
```
> Note: This command create a React app with Typescript


2 Install library required for change files .css to .scss
```sh
npm install node-sass
```
> Note: Remember change all files .css by scss


3 Install library required config EsLint
```sh
npm install eslint --save-dev
```
- init the config with
```sh
npx eslint --init
```
choose:
- check syntax, find problems and apply code styling
- JavaScript modules (import / export)
- react
- yes
- browser
- use a popular style guide
- Airbnb:https://github.com/airbnb/javascript
- JSON
- yes

execute eslint:
- npx eslint src/*
- npx eslint src/* --fix

config error => cannot resolve the path to module './App'.
```sh
npm install eslint-import-resolver-typescript --save-dev
```


4 install  Prettier and stylelint
```sh
npm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
npm i -D stylelint-scss
```
and create the file .prettier.config.js and .stylelintrc.json by configure the rules.
this libraries help with the structure and rules in the code mainly in styles and html files
for look the errors you can run:
```sh
npx prettier --check src/*
```
and create a script in package.json for run 'stylelint --ignore-path .gitignore --fix \"**/*.scss\"' 


## Development
You can run development app with:
```sh
npm start
```


#### Building for source

For production release:

```sh
npm run build
```

## License

MIT
