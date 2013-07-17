node-server
===========
A very simple example of using Vagrant to provision a VirtualBox VM running Ubuntu 12.04 LTS (Precise 64).

The provision script installs node.js/express and the Heroku Toolbelt.

## First Install/Run:
* Install [VirtualBox][virtualbox.url]
* Install [Vagrant][vagrant.url]
* Clone this project
* Start up the VM with vagrant

```bash
  $ vagrant up
```
* Wait for the box to download (Ubuntu) and the VM to be provisioned
* ssh into the VM by executing: `$ vagrant ssh`
* cd to **/vagrant** and execute `$ foreman start`
* Browse to [http://localhost:8080][localhost.url] from your host machine

Vagrant automatically shares the project directory to **/vagrant** in the VM - so you can code in the comfort of your host machine.
*Note that the root user and password are both 'vagrant'*

## Stop/Halt the VM:

```bash
  $ vagrant halt
```
## (Re)Start the VM without provisioning:

```bash
  $ vagrant up --no-provision
```
## Deploying to [Heroku][heroku.url]:
* ssh into the VM by executing: `$ vagrant ssh`
* Add heroku as a remote repo (execute and complete the prompts):

```bash
vagrant@precise64:/vagrant$ heroku login
vagrant@precise64:/vagrant$ heroku keys:add
vagrant@precise64:/vagrant$ heroku create
```
* Deploy to heroku:

```bash
vagrant@precise64:/vagrant$ git push heroku master
```
* Browse to your herokuapp.com url

[virtualbox.url]:https://www.virtualbox.org/
[vagrant.url]:http://www.vagrantup.com/
[localhost.url]:http://localhost:8080
[heroku.url]:https://www.heroku.com/

