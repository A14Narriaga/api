# API
 Implement a Website with and API using SASS and Typescript with Parcel.

# Comands for SASS
- Install nodejs (https://nodejs.org/en/).
- npm init / npm init name -y
- npm install node-sass -D (At the root of the project).
[-D (Development) -g (global)]
- npx node-sass sass/style.scss -o css (Compilar)
- npx node-sass --watch sass/style.scss -o css (Autocompilar)
- npm install parcel@next
- add browserslist in package.json:
```"name": "api",
  "version": "0.0.1",
  "description": "Implement a Website with and API using SASS and Typescript with Parcel.",
  "browserslist": "> 0.2%",
```
- add scripts in package.json:
```
"scripts": {
    "build": "parcel build ./code/app.ts",
    "sassw": "npx node-sass --watch sass/style.scss -o css"
  },
```