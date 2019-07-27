From node:10
RUN mkdir -p /srv/app/fullstack-server
WORKDIR /srv/app/fullstack-server

COPY package.json /srv/app/fullstack-server
COPY yarn.lock /srv/app/fullstack-server

RUN yarn

COPY . /srv/app/fullstack-server

CMD ["yarn", "run", "dev"]