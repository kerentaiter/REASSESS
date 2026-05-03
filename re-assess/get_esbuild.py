import urllib.request
import tarfile
import os

url = "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.20.1.tgz"
filename = "esbuild.tgz"

print("Downloading...")
urllib.request.urlretrieve(url, filename)

print("Extracting...")
with tarfile.open(filename, "r:gz") as tar:
    tar.extractall()

os.rename("package/esbuild.exe", "esbuild.exe")
print("Done!")
