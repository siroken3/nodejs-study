# node.js study

## INSTALL
git clone git://github.com/creationix/nvm.git ~/.nvm
source ~/.nvm/nvm.sh

nvm ls-remote
nvm install 0.10.33


node -v
v0.10.33

## SETUP

nvm alias default v0.10.33
default -> v0.10.33

vi ~/.bash_profile

if [[ -s ~/.nvm/nvm.sh ]];
 then source ~/.nvm/nvm.sh
fi

## RUN

node example.js
