FROM debian:10

MAINTAINER "Tuan Nguyen-Anh <ecsearch5@gmail.com>"
ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt upgrade -y
RUN apt install -y nodejs npm
COPY package.json /src/package.json
COPY bob_insecure.js /src/bob.js
COPY cert.pem /src/cert.pem
COPY key.pem /src/key.pem
WORKDIR /src

EXPOSE 443
EXPOSE 80
CMD ["/usr/bin/npm", "run", "up"]
