#/bin/sh

cd miksu

node server.js
[bitnami@bitnami-nodejs-2ff2 ~]$ cat create.sh 
#/bin/sh

git clone https://github.com/mikarinneoracle/miksu.git
cd miksu

npm install
node server.js
