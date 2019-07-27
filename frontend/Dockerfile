From node:10
RUN mkdir -p /srv/app/fullstack-client
WORKDIR /srv/app/fullstack-client

COPY package.json /srv/app/fullstack-client
COPY yarn.lock /srv/app/fullstack-client

RUN yarn

COPY . /srv/app/fullstack-client

CMD ["yarn", "start"]