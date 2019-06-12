FROM node:10-alpine
COPY . /home/node/app/
#COPY ./api.local.conf /etc/nginx/conf.d/api.local.conf
WORKDIR /home/node/app/
RUN npm install
EXPOSE 3002
CMD [ "npm", "start" ]
