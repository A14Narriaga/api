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