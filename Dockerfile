FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

RUN ["chmod", "+x", "/usr/src/app/preb-build.sh"]

ENTRYPOINT [ "sh", "/usr/src/app/preb-build.sh" ]

CMD [ "http://localhost:3001","http://localhost:3000", "nil", "nil" ]