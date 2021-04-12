# API App
 Implement a Website with and API using SASS and Typescript with Parcelv2.
 The API that i use: https://breakingbadapi.com/

 # Parcel (Blender)
Helps to compile all the code of the app and give 
new files that will be understanding for the most 
of the browsers.

# For development
- Install nodejs: https://nodejs.org/en/
- Create a proyect.
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
  },
```
- Create the directory "code" and insert all the files to create the aplication. (.html, .sass, .ts)
- npm run dev (Development).
- Parcel create the "dist" directory and start a server.

# For production
- Delete de "dist" directory.
- Create the directory "public" and insert all the source files (img, etc...).
- Move the index.html to the root.
  - Link the css and js file.
  ```
  <link rel="stylesheet" href="./public/app.css">
  <script type="text/javascript" src="./public/app.js"></script>
  ```
  - Fix sources paths.
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
- npm run build (For production)