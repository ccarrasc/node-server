#!/bin/bash

# Add repo and install Node.js
sudo apt-get update
sudo apt-get install python-software-properties python g++ make -y
sudo add-apt-repository ppa:chris-lea/node.js -y
sudo apt-get update
sudo apt-get install nodejs -y

# Install the Heroku Toolbelt
wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
