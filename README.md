# API
 Implement a Website with and API using SASS and Typescript with Parcelv2.

# Comands
- Install nodejs (https://nodejs.org/en/)
- npm init name -y
- npm install parcel@next
- add browserslist in package.json:
```
  "name": "",
  "version": "",
  "description": "",
  "browserslist": "> 0.2%",
```
- Add scripts in package.json:
```
"scripts": {
    "build": "parcel build ./code/app.ts"
  
  },
```
- Add targets in package.json:
```
"targets": {
    "app": {
      "distDir": "./public"
    }
  }
```
- npm run buid

# Directories of the project
- code: principal files
- - app.ts file to compile in build (importing the sass files)
- public: result of Parcelv2 compilation