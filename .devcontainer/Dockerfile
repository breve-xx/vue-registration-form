FROM node:16-alpine

RUN yarn global add @vue/cli

RUN apk add git openssh zsh
RUN sed -i 's/root:x:0:0:root:\/root:\/bin\/ash/root:x:0:0:root:\/root:\/bin\/zsh/g' /etc/passwd
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
    -t minimal \
    -p git