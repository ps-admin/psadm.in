---
date: "2016-03-24T11:59:28-05:00"
title: "Sparky"
description: "Sparky is a framework for helping to manage your PeopleSoft installation on Linux from the command line." 
draft: true
logo: "sparky.svg"
---

About
-----

Sparky is a framework for helping to manage your PeopleSoft installation on Linux from the command line. It's similar to projects like [oh-my-zsh][oh-my-zsh] and [bash-it][bash-it], but created specifically for use with the local user account PeopleSoft is installed with.

In a nutshell, it serves two main functions:

* Environment Variable Management
* Administration Automation

### Environment Management

If you've ever installed PeopleTools under Linux you're familiar with the process of having to manually configure environment variables (`PS_HOME, PS_CFG_HOME, TUXDIR, etc`).  Setting these up and sourcing the psconfig.sh script can be done within a user's login profile, but things can get complicated when trying to switch between multiple PeopleTools installations or configuration homes.

Sparky solves this by providing utilities for defining sets of environment variables and then switching between them using the `pscfg` and `psenv` utilities.

<script type="text/javascript" src="https://asciinema.org/a/czn4ylg280gqa0iy4zsmiqpwv.js" id="asciicast-czn4ylg280gqa0iy4zsmiqpwv" async></script>

### Administration Automation

While the `psadmin` menu interface is easy to use, it can be slow and cumbersome.  Although most of the functionality of the menu interface is available through command line arguments (ex: `psadmin -c purge -d PSDMO`), it isn't exactly intuitive.

To help, Sparky provides the `psadm` utilty which acts as a wrapper around `psadmin` and uses git-style subcommands.


Installation
------------

### Prerequisites

Before you get started, make sure your system has the following:

* Linux environment → Sparky is currently developed and tested under RHEL 6
* bash → the default shell for the PeopleSoft service account user should be set to bash
* curl → necessary for automated installation and updates (not necessary if you’re doing a manual installation)

### Automated Installation

The quickest way to install Sparky is to login to your server as the PeopleSoft installation account user (ex: psoft) and run the following from the terminal.

```bash
curl -kL http://git.io/7dpE1g | bash
```

The script will attempt to...

* Download preference files and scripts into the ~/.ps-sparky directory
* Backup any existing .profile, .bash_profile, and .bashrc files
* Create symlinks to the profile, bash_profile, and bashrc files in ~/.ps-sparky
* Copy the sample sparkyrc file to ~/.sparkyrc
* Create an environments directory in the user's $HOME

### Manual Installation

In case you don’t have direct access to the internet from your server or have security concerns, Sparky can be installed manually. To do so, simply download the Sparky installation files to the home folder of your PeopleTools installation account user, unpack the ".tar.gz" file and rename it to ".ps-sparky". For example: 

```bash
cd ~
mkdir ~/.ps-sparky
curl --location https://github.com/jrbing/ps-sparky/tarball/master -o /tmp/ps-sparky.tar.gz
gunzip -vf /tmp/ps-sparky.tar.gz
tar -xvf /tmp/ps-sparky.tar
cp -rf jrbing-ps-sparky-???????/* .ps-sparky/
./.ps-sparky/util/bootstrap.sh
```

### Source Installation

If you have git installed and would like to install from source, you can run the following.

```bash
cd ~
git clone https://github.com/jrbing/ps-sparky.git .ps-sparky
./.ps-sparky/util/bootstrap.sh
```

Configuration
-------------


Usage
-----


[dotfiles]: https://dotfiles.github.io/ "Github Dotfiles"
[oh-my-zsh]: https://github.com/robbyrussell/oh-my-zsh/ "oh-my-zsh"
[bash-it]: https://github.com/Bash-it/bash-it "bash-it"
