FROM node:21-alpine3.18
ARG NEXT_PUBLIC_BEAM_TOKEN
ENV NEXT_PUBLIC_BEAM_TOKEN=$NEXT_PUBLIC_BEAM_TOKEN

LABEL MAINTAINER="Mehrshad Lotfi <mehrshad@mehrshad.io>"

WORKDIR /usr/src

COPY ["package.json", "."]

RUN npm install

COPY [".", "/usr/src"]

EXPOSE 4000

CMD ["npm", "run", "start"]