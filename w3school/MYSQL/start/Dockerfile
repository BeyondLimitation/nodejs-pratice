FROM node:6
ADD demo_mysql.js /home/node/demo_mysql_docker.js
RUN npm install -g mysql
WORKDIR /home/node/
RUN npm link mysql
USER node
CMD ["node","demo_mysql_docker.js"]
##docker run -itd --network {Type Docker network name you want} {Container name} node:{version, i use LTS version, 6}
