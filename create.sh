#/bin/sh

# clone using ssh
# git clone git@github.com:mikarinneoracle/miksu.git

# clone using https
git clone https://github.com/mikarinneoracle/miksu.git
cd miksu

npm install
node server.js
