---
date: "2016-03-24T11:59:28-05:00"
title: "Sparky"
description: "Sparky is a collection of tools to help bootstrap and manage a PeopleSoft Web, App, or Process Scheduler server running on Unix or Linux."
draft: true
logo: "sparky.svg"
---

About
-----

Sparky is a collection of tools to help bootstrap and manage a PeopleSoft Web, App, or Process Scheduler server running on Unix or Linux.  In a nutshell, it serves two main functions:

* Environment Management
* Administration Scripts

Features
--------
Here’s a quick overview of what’s included:

* Easy installation
* Updated shell prompt for displaying information about the current environment
* Aliases to common PeopleTools executables
* Helper scripts:
    * psenv → Script to toggle PeopleSoft environment variables
    * psadm → Wrapper for the psadmin and various other scripts in the PeopleSoft home.
* Automated updates

Installation
------------

Before you get started, make sure your system has the following:

* Unix or Linux environment → Sparky is currently developed and tested under Solaris 10 and RHEL 5
* bash → the default shell for the PeopleSoft service account user should be set to bash
* curl → necessary for automated installation and updates (not necessary if you’re doing a manual installation)

### Automated Installation

The quickest way to install Sparky is to login to your server as the PeopleSoft installation account user (ex: psoft) and run the following from the terminal.

```bash
curl -kL http://git.io/7dpE1g | bash
```

The script will attempt to…

* Download preference files and scripts into the ~/.ps-sparky directory
* Backup any existing .profile, .bash_profile, and .bashrc files
* Create symlinks to the profile, bash_profile, and bashrc files in ~/.ps-sparky
* Copy the sample localrc file to ~/.localrc
* Create an environments folder in the HOME directory and add a sample environment configuration file

### Manual Installation

In case you don’t have direct access to the internet from your server or have security concerns, Sparky can be installed manually. To begin, simply download the Sparky installation files to your local machine, and upload the tar file to the home folder of your PeopleTools installation account user. Next, run the following command to unzip the file in the current directory and rename it. tar -xvf ??? && rename .ps-sparky Finally, execute the bootstrap script provided with Sparky to backup your current .profile, .bash_profile, and .bashrc files and create symlinks to the ones in the .ps-sparky directory.

```bash
./.ps-sparky/util/bootstrap.sh
```

### Configuration

Rename/edit the sample.psenv file:

```bash
#!/usr/bin/env bash
# Sample .psenv file

export PS_ENV="<change_me>"  # Set this to the name of your environment settings
                            # (This is what will be shown in your prompt)

###############################################
# Change the following to the appropriate paths
###############################################

# ----- PeopleTools -----
export PS_HOME="/path/to/PS_HOME"
export PS_CFG_HOME="/path/to/PS_CFG_HOME"
export PS_APP_HOME="/path/to/PS_APP_HOME"
export TUXDIR="/path/to/tuxedo/installation"

# ----- 3rd Party Tools -----
#export JAVA_HOME="/path/to/java/installation"   # Required if using Weblogic
#export COBDIR="/path/to/cobol/installation"     # Required if using COBOL

# ----- PSADM -----
# - Change the following to
# - use with the psadm script
export PS_APP_DOMAIN="hrdmo"
export PS_PRCS_DOMAIN="hrdmo"
export PS_PIA_DOMAIN="peoplesoft"

##########
# Optional
##########

# ---------- Oracle Database ----------
# - Uncomment and modify the following
# - for use with Oracle
#export ORACLE_HOME="/path/to/ORACLE_HOME"
#export ORACLE_BASE="/path/to/ORACLE_BASE"

# ----- Oracle Enterprise Manager -----
# - Uncomment and modify the following
# - for use with Oracle Enterprise Manager
#export AGENT_HOME="/path/to/AGENT_HOME"

##########################################
# Custom PATH and LD_LIBRARY_PATH settings
# Add any custom changes to your PATH and
# LD_LIBRARY_PATH below
##########################################
Edit the .localrc file:

#!/usr/bin/env bash
# ps-sparky custom settings file

############################
# Place Custom Settings Here
############################
export EDITOR=vim             # Change to whatever editor you prefer
export USER="psoft"           # Change to the PeopleSoft service account username
export PATH=$PATH             # Add any custom changes to your PATH here
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH  # Add any custom changes to your LD_LIBRARY_PATH here

# --------------------------------------------- #
################# DO NOT MODIFY #################
export ORIGINAL_PATH=$PATH
export ORIGINAL_LD_LIBRARY_PATH=$LD_LIBRARY_PATH
# --------------------------------------------- #

################################
# Default PeopleSoft Environment
################################
# Uncomment and update the following line if
# you'd like to source a .psenv file upon login (ex: ". psenv hrdmo")
#. psenv <change_to_name_of_environment>
```

Usage
-----

Switching Environment Settings

```bash
. psenv <environment name>
```

Automating Administration Tasks

psadm
Additional Commands

psa:  Alias for psadmin
Customization

Want to know more? Check out the source on github.