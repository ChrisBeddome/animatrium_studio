FROM ubuntu:22.04 

ARG NEXT_WORKDIR

RUN apt update
RUN apt install -y curl

RUN curl -sL https://deb.nodesource.com/setup_18.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh
RUN apt install -y nodejs

WORKDIR ${NEXT_WORKDIR}

COPY . .

RUN npm install

