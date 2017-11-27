#FROM node:6.10
FROM mikarinneoracle/miksu:1.0
# replace this with your application's default port
EXPOSE 3000
WORKDIR /pipeline/source
ADD . /pipeline/source
CMD npm start
