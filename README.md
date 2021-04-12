# API App
 Implement a Website with and API using SASS and Typescript with Parcelv2.
 The API that i use: https://breakingbadapi.com/

 # Parcel (Blender)
Helps to compile all the code of the app and give 
new files that will be understanding for the most 
of the browsers.

# Comands
- Install nodejs: https://nodejs.org/en/
- Create a proyect
```
npm init -y
```
- Install Parcelv2
```
npm install parcel@next
```
- Add browserslist in package.json:
```
  "name": "",
  "version": "",
  "description": "",
  "browserslist": "> 0.2%",
```
- Add scripts in package.json:
```
"scripts": {
    "dev": "parcel code/index.html",
    "build": "parcel build code/index.html"
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
- npm run dev (Development)
- npm run build (For final project)

# Directories of the project
- code: principal files
- dist: result of Parcelv2 compilation (dev)
- public: result of Parcelv2 compilation (build)