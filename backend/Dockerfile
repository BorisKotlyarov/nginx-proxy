FROM node:10-alpine
#COPY vhost.d/api.app.local_location /etc/nginx/vhost.d/api.app.local_location
COPY . /home/node/app/
WORKDIR /home/node/app/
RUN npm install
EXPOSE 3002
CMD [ "npm", "start" ]
