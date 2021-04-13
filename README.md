# API App
 Implement a Website with and API using SASS and Typescript with Parcel.
 The API that i use: https://breakingbadapi.com/

# Parcel (Blender)
Helps to compile all the code of the app and give 
new files that will be understanding for the most 
of the browsers.

## Install Parcel in our project (Yarn)
- Install nodejs: https://nodejs.org/en/
- Create a proyect.
```
yarn init -y
```
- Install Parcel
```
yarn add -D parcel
```

## Parcel for development
- Add development script in package.json [ports front: 3000 to 3999 / back: 4000 to forward]:
```
"scripts": {
    "dev": "parcel ./code/index.html -p 3001"
  },
```
- Create the directory "code" and insert all the files and directories to create the aplication. (.html, .sass, .ts)
- Run for development
```
yarn run dev
```
- Parcel create the "dist" directory and start a server in the port 3001.

## Parcel for production
- Delete de "dist" directory.
- Add production script in package.json:
```
 "scripts": {
    "dev": "parcel ./code/index.html -p 3001",
    "pro": "parcel build ./code/index.html && python ./build-script.py"
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
- yarn run pro

# Python script
Fix the erros in Parcel paths for production:
```
import pathlib
import shutil

htmlFile = open("public\index.html", "r")
data = htmlFile.read()
htmlFile.close()
data = data.replace('src="/', 'src="public/')
data = data.replace('href="/', 'href="public/')
htmlFile = open("public\index.html", "w")
htmlFile.write(data)
htmlFile.close()
shutil.move("public\index.html", "index.html")
```

# SASS notes
- _example.scss (The _ means that parcel most not compile that file).
- @import "example"; (Import a file).
- _mixins.scss (All the SASS code repetitive)
    - Content file mixins.scss
    ```
    @mixin container {
        (repetitive code)
    }
    ```
    - Import mixins.scss file
    ```
    @import "mixins";
    @include container; (Inside the code)
    ```

# Git comands
- Install git: https://git-scm.com/download
- Open terminal.
    - Write to confirm instalation:
    ```
    git
    ```
    - Configurate git:
    ```
    git config --global user.name "my_name" (local name)
    git config --global user.email "my_email"
    ```
    - Clon repository:
     ```
    git clone url_of_repo
    ```
    - Add files in the directory
    - Create '.gitignore' file in the root and add the directories or files that github will not save.
    - Show status of the project:
    ```
    git status
    ```
    - Select file(s) to save in the repo:
    ```
    git add ./name_of_file (one file)
    git add . (all the files)
    ```
    - Save locally files
    ```
    git commit -m "description_of_commit"
    ```
    - Save in GitHub
    ```
    git push
    ```
    - Login in terminal or web depending of the operative system.