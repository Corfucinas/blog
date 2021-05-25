---
title: "What's the best way to install Python in your computer?"
date: 2021-05-21T15:48:32+08:00
draft: false

# post thumb
image: "images/featured-post/pyenv-stylecloud.png"

# meta description
description: "Learn the best way to install python using pyenv"

# taxonomies
categories:
  - "Computer and programming"
tags:
  - "Computer languages"
  - "Education"
  - "Python"
  - "Pyenv"

# post type
type: "featured"
---

Sometimes the best way to install a program, is not downloading it.

# What is Pyenv?

From their [Github repo](https://github.com/pyenv/pyenv).

> "pyenv lets you easily switch between multiple versions of Python. It's simple, unobtrusive, and follows the UNIX tradition of single-purpose tools that do one thing well."

In simple terms, once you have `pyenv` installed in your computer, you will be able to have access to all the possible **builds and versions** of _CPython_, not just a single version.

### Cool...but why?

One of the things any developer will find out when they desire to learn a new skill is that there's a lot of ways to do one thing, but usually there's a consensus on only one way to do it right. Naturally, many people will have disagreements, but when it comes to the ability to reproduce builds and managing time correctly, developers should be precise and leave their preferences aside.

### The easy or the hard way

If you are just starting to learn Python, you will notice there's no such thing as _python_, rather there is _Python2_ or _Python3_. Please note that `Python2`, originally released on October 2000 [reached the end of it's life cycle](https://www.python.org/downloads/release/python-2718/) on April 20, 2020. I would suggest to reference knowing that it is no longer supported or currently in development, and new frameworks are also in the process of phasing it out, so there's no point of learning it, except to understand why certain things evolved the way the are now.

It's important also to understand the way Python releases are made, they follow what is call a `semver` versioning. Under this system, there's a way to be specific about the changes any software release receives following the `major.minor.micro` convention. For example, python3.9.5 is the latest release. But there's also python3.9.4, python3.9.3, python3.9.2 (you see where I'm going).

The reason tools such as pyenv exist, is to be able to grab the latest **feature, performance or security release** in the simplest and fastest way, rather than manually navigating to the [python website](https://www.python.org/) and grabbing an executable, uninstalling your current version (or having to manage both versions at the same time independently) and installing the new version.

In addition, pyenv let's you:

- Let you change the global Python version on a per-user basis.
- Provide support for per-project Python versions.
- Allow you to override the Python version with an environment variable.
- Search commands from multiple versions of Python at a time. This may be helpful to test across Python versions with [tox](https://pypi.org/project/tox/).

> So intead of having to manage all python installations independently, we have one tool to manage them all.

### How to install?

**Ubuntu/Debian/Mint**

Dependencies:

```
$ sudo apt-get update; sudo apt-get install make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
```

> In case you have another distribution, please install the dependencies [here](https://github.com/pyenv/pyenv/wiki#suggested-build-environment)

Installer script, you can read more about it [here](https://github.com/pyenv/pyenv-installer)

```
$ curl -L https://raw.githubusercontent.com/pyenv/pyenv-installer/master/bin/pyenv-installer | bash
```

**macOS**

```
$ brew update
$ brew install pyenv
```

**Windows**

> If you're on Windows, consider using @kirankotari's [pyenv-win](https://github.com/pyenv-win/pyenv-win) fork. (Pyenv does not work in Windows outside the Windows Subsystem for Linux.)

If everything completes successfully, you have now installed pyenv.

### Configuring your shell

After it has been installed, you will be required to add the [following](https://github.com/pyenv/pyenv#basic-github-checkout) to you shell configuration file `(bash, zshrc, fish)`.

Since I'm using the [_friendly interactive shell_](https://fishshell.com/) (fish), I would need to execute the following code:

```
$ set -Ux PYENV_ROOT $HOME/.pyenv
$ set -U fish_user_paths $PYENV_ROOT/bin $fish_user_paths
```

and add this to `~/.config/fish/config.fish`:

```
status is-login; and pyenv init --path | source
```

### Let's try it out

On your terminal go ahead and write

```
$ pyenv version
```

The output will be:

> 3.9.5 (set by ~/.pyenv/version)

Depending on the version you have installed when reading this the version will be different.

Let's check out all the commands

```
$ pyenv help

Some useful pyenv commands are:
   activate    Activate virtual environment
   commands    List all available pyenv commands
   deactivate   Deactivate virtual environment
   doctor      Verify pyenv installation and development tools to build pythons.
   exec        Run an executable with the selected Python version
   global      Set or show the global Python version(s)
   help        Display help for a command
   hooks       List hook scripts for a given pyenv command
   init        Configure the shell environment for pyenv
   install     Install a Python version using python-build
   local       Set or show the local application-specific Python version(s)
   prefix      Display prefix for a Python version
   rehash      Rehash pyenv shims (run this after installing executables)
   root        Display the root directory where versions and shims are kept
   shell       Set or show the shell-specific Python version
   shims       List existing pyenv shims
   uninstall   Uninstall a specific Python version
   --version   Display the version of pyenv
   version     Show the current Python version(s) and its origin
   version-file   Detect the file that sets the current pyenv version
   version-name   Show the current Python version
   version-origin   Explain how the current Python version is set
   versions    List all Python versions available to pyenv
   virtualenv   Create a Python virtualenv using the pyenv-virtualenv plugin
   virtualenv-delete   Uninstall a specific Python virtualenv
   virtualenv-init   Configure the shell environment for pyenv-virtualenv
   virtualenv-prefix   Display real_prefix for a Python virtualenv version
   virtualenvs   List all Python virtualenvs found in `$PYENV_ROOT/versions/*'.
   whence      List all Python versions that contain the given executable
   which       Display the full path to an executable

See `pyenv help <command>' for information on a specific command.
For full documentation, see: https://github.com/pyenv/pyenv#readme
```

It's best to read all the commands so that you are familiar, but for now let's install python on your system.

```
$ pyenv install -l
```

This will show an extensive list of all the supported python versions, let's look at python3.x.z

```
...
3.9.0
3.9-dev
3.9.1
3.9.2
3.9.3
3.9.4
3.9.5
...
```

The latest version as of this article is `3.9.5`, let's go ahead and install it

```
$ pyenv install 3.9.5
```

You can install as many versions as you want, I suggest going for the latest release, since eventually it will follow the the most up-to-date changes. With `pyenv` we can also specify which version we would like to run on our system, for this we need to run:

```
$ pyenv global 3.9.5
```

This will change (or set) your systems' default version, you can confirm it by running"

```
$ python --version
```

You will see the following output

> Python 3.9.5

If you want to change the global python, you can run the same command and specify which version you want to use.
Pyenv also provides you the ability to specify a `local version` of Python per project, in case you require one specific version for any reason, you can run:

```
$ pyenv local <version>

Sets the local application-specific Python version(s) by writing the
version name to a file named `.python-version'.

When you run a Python command, pyenv will look for a ".python-version"
file in the current directory and each parent directory. If no such
file is found in the tree, pyenv will use the global Python version
specified with "pyenv global".
```

### Conclusion

Although they are other options to manage your Python's version in your computer, and many arguments made in favor or against each tool _(and I do encourage all developers to continue experimenting to find what fits within their toolkit)_, the reality is that when it comes to simplicity and time efficiency, pyenv is one of the best tools you can select and everyone should consider.
