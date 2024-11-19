# End-to-end tests of credential issuer

## Prerequirements

### Nodejs
Install nodejs. Preferred version is found in [.nvmrc](.nvmrc)
Easiest with nvm: [Install nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```
bash: `source ~/.bashrc`

zsh: `source ~/.zshrc`

ksh: `. ~/.profile`

Install nodejs with version specified in [.nvmrc](.nvmrc)
```
nvm install
```

### Ubuntu 24.04

Install required packages 

```
apt-get install libgtk2.0-0t64 libgtk-3-0t64 libgbm-dev libnotify-dev libnss3 libxss1 libasound2t64 libxtst6 xauth xvfb
```

### Local environment up and running

TODO docker compose länk

## Run the tests

Install node packages

```
npm install
```

Run the tests

```
npm run cy:open
```
