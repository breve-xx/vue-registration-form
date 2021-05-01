FROM kolaente/yarn

RUN yarn global add @vue/cli

RUN apk add git openssh zsh
RUN sed -i 's/root:x:0:0:root:\/root:\/bin\/ash/root:x:0:0:root:\/root:\/bin\/zsh/g' /etc/passwd
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh
RUN sed -i 's/ZSH_THEME="robbyrussell"/ZSH_THEME="minimal"/g' /root/.zshrc