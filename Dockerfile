FROM node:6.10
# replace this with your application's default port
EXPOSE 3000
WORKDIR /pipeline/source
ADD . /pipeline/source
CMD npm start
