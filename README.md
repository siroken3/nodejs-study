# node.js study

## INSTALL

```bash
$ git clone git://github.com/creationix/nvm.git ~/.nvm
$ source ~/.nvm/nvm.sh
```

```bash
$ nvm ls-remote
$ nvm install 0.10.33
```

```bash
$ node -v
$ v0.10.33
```

## SETUP

```bash
$ nvm alias default v0.10.33
$ default -> v0.10.33
```

```bash
$ vi ~/.bash_profile

if [[ -s ~/.nvm/nvm.sh ]];
 then source ~/.nvm/nvm.sh
fi
```

## RUN

```bash
$ node example.js
```
