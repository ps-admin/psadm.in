---
date: "2016-03-24T11:59:28-05:00"
title: "Voodoo"
description: "VooDoo is a command line application to help automate some PeopleSoft administration activities that are typically performed locally."
draft: false
logo: "voodoo.svg"
---

### About

VooDoo is a command line application to help automate some PeopleSoft
administration activities that are typically performed locally. It
provides a simple command line interface for interacting with your local
PeopleTools installation using predefined settings for each of your
environments. For example, migrating a project between two environments
using VooDoo is as simple as issuing the following command:

```bat
C:\> voodoo migrate TEST_PROJECT HRDEV HRTEST
```

### Features

Some Features include:

* Generate HTML compare reports for projects
* Migrate projects between databases
* Build project definitions
* Archive project to file
* Execute Application Engine programs locally
* Execute SQR’s locally

### Installation

In order to run VooDoo, you’ll first need the following:

* Ruby 1.9.2 or higher
* Local installation of PeopleTools (developed and tested using 8.49)
* Windows XP or higher (Developed using Windows 7, tested on XP)
* PeopleSoft Environments running on Oracle Database

#### Next

VooDoo is packaged as a ruby gem, and can be installed via the following command:

```bat
C:\> gem install ps-voodoo
```


### Configuration

Once installed, you’ll first need to setup the global configuration:

```bat
C:\>voodoo config

### Global Configuration Settings ###
Local tools directory: C:\psoft\pt84927
Default output directory for migration data: X:\output
```

Next you’ll want to add a few environments:

```bat
C:\>voodoo add VDDEV

### Appdesigner/Datamover/AppEngine Settings ###
Database type: |ORACLE| ORACLE
Application username: VD1

Would you like to archive migration output files for this environment? (y/n) n

### SQR Settings ###
Database username: |sysadm| sysadm
PS_HOME directory: V:\VDDEV

C:\>voodoo add VDTEST

### Appdesigner/Datamover/AppEngine Settings ###
Database type: |ORACLE| ORACLE
Application username: VD1

Would you like to archive migration output files for this environment? (y/n) y
Archive destination: X:\archive

### SQR Settings ###
Database username: |sysadm|
PS_HOME directory: V:\VDTEST
```

Global and environment configuration data is stored in YAML files under the .voodoo folder in the user’s HOME directory. When commands are issued to VooDoo, it uses the environment configuration information to pass command line arguments to the local executable. In some situations the Windows registry is updated to set options that cannot be passed via the command line (project build output destinations, datamover output destinations).

### Usage

To run a compare report:

```bat
C:\>voodoo compare COMPARE_TEST VDDEV VDTEST
Application password for VDDEV: **********
Application password for VDTEST: **********
Name for output folder: VOODOO_TEST
07/18/2011 13:09:54: Creating compare reports for SCRIPTING_TEST between FNDEV and FNSPTB
```

If successful, the generated HTML output of the compare report will be opened in your default browser. To see what else you can do, run:

```bat
C:\>voodoo help
NAME:

    Voodoo

DESCRIPTION:

    Black Magic Utility for PeopleSoft Administration

COMMANDS:

    add                  adds an environment to the configuration file
    archive              copies a project to file from the specified environment
    build                builds a project definition in the specified environment
    compare              create a compare report for the specified project
    config               create global configuration settings
    help                 Display global or [command] help documentation.
    list                 Outputs a list of configured environments
    migrate              migrates a project between environments
    remove               removes an environment from the configuration file
    run appengine        runs an appengine against the specified environment
    run sqr              runs the specified sqr locally
    show                 shows configuration details for an environment
    template datafix     creates a datafix folder with template files

GLOBAL OPTIONS:

    -h, --help
        Display help documentation

    -v, --version
        Display version information

    -t, --trace
        Display backtrace when an error occurs
```
