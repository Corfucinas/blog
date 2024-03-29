---
author:
  name: Phillip Torres
  homepage: https://absolutearray.com/
  bio: "Interested in algorithm trading, computer languages (Python, JS, SQL, Solidity, Rust), philosophy, and blockchain technology. For me, the most important traits are someone who can be: performance-driven, high integrity, self-disciplined, autodidacticism, and is goal-oriented. My priority is spearheading the development of products with clear communication guidelines."

title: What's the best way to install Python in your computer?
date: 2021-05-21T15:48:32+08:00
publishdate: 2021-05-21T15:48:32+08:00
draft: false

# post thumb
image:
  src: images/post/pyenv-stylecloud.png

# meta description
description: Learn the best way to install python using pyenv
summary: Learn the best way to install python using pyenv

# taxonomies
categories:
  - Computer and programming
tags:
  - Computer languages
  - Education
  - Python
  - Pyenv
  - Installing python
  - Virtual env

keywords:
  - Computer languages
  - Education
  - Python
  - Pyenv
  - Installing python
  - Virtual env

amp:
  elements:
    - amp-social-share

ogp:
  title: What's the best way to install Python in your computer?
  url: https://absolutearray.com/articles/best-way-to-install-python-in-your-computer/
  description: Learn the best way to install python using pyenv
  image: images/post/pyenv-stylecloud.png
  site: https://absolutearray.com/articles/best-way-to-install-python-in-your-computer/

sitemap:
  changefreq: weekly
  priority: 0.5
  filename: sitemap.xml

# post type
type: post

# next article
next: 117-vscode-extensions-the-ultimate-guide-part-1.md
---

{{< amp-image
alt="pyenv-stylecloud"
src="images/post/pyenv-stylecloud.png"
width="1500"
height="1500"
layout="responsive" >}}

Sometimes the best way to install a program, is not simple as you think.

# What is Pyenv?

From their [Github repo](https://github.com/pyenv/pyenv "pyenv-github-repo").

> "pyenv lets you easily switch between multiple versions of Python. It's simple, unobtrusive, and follows the UNIX tradition of single-purpose tools that do one thing well."

In simple terms, once you have `pyenv` installed in your computer, you will be able to have access to all the possible **builds and releases** of _CPython_, not just a single version.

## Cool...but why?

One of the things any developer will find out when they desire to learn a new skill is that there's a lot of ways to do one thing, but usually there's a consensus on only one way to do it right. Naturally, many people will have disagreements, but when it comes to the ability to reproduce builds and managing time correctly, developers should be precise and leave their preferences aside.

### The easy or the hard way

If you are just starting to learn Python, you will notice there's no such thing as _python_, rather there is _Python2_ or _Python3_. Please note that `Python2`, originally released on October 2000 [reached the end of it\'s life cycle](https://www.python.org/downloads/release/python-2718/ "python2-last-release") on April 20, 2020. I would suggest to reference knowing that it is no longer supported or currently in development, and new frameworks are also in the process of phasing it out, so there's no point of learning it, except to understand why certain things evolved the way the are now.

It's important also to understand the way Python releases are made, they follow what is call a `semver` versioning. Under this system, there's a way to be specific about the changes any software release receives following the `major.minor.micro` convention. For example, python3.9.5 is the latest release. But there's also python3.9.4, python3.9.3, python3.9.2 (you see where I'm going).

The reason tools such as pyenv exist, is to be able to grab the latest **feature, performance and security release** in the simplest and fastest way, rather than manually navigating to the [python website](https://www.python.org/ "official-python-website") and grabbing an executable, uninstalling your current version (or having to manage both versions at the same time independently) and installing the new version.

In addition, pyenv let's you:

- Let you change the global Python version on a per-user basis.
- Provide support for per-project Python versions.
- Allow you to override the Python version with an environment variable.
- Search commands from multiple versions of Python at a time. This may be helpful to test across Python versions with [tox](https://pypi.org/project/tox/ "python-tox").

> So instead of having to manage all python installations independently, we have **one tool to manage them all.**

### How to install?

**Ubuntu/Debian/Mint**

Dependencies:

```bash
$ sudo apt-get update; sudo apt-get install make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
```

> In case you have another distribution, [please install the dependencies](https://github.com/pyenv/pyenv/wiki#suggested-build-environment "pyenv-suggested-build-environment")

Execute the following in order to use the installer script, [you can read more about it here](https://github.com/pyenv/pyenv-installer "pyenv-installer-script")

```bash
$ curl -L https://raw.githubusercontent.com/pyenv/pyenv-installer/master/bin/pyenv-installer | bash
```

**macOS**

```bash
$ brew update
$ brew install pyenv
```

**Windows**

> If you're on Windows, consider using @kirankotari's [pyenv-win](https://github.com/pyenv-win/pyenv-win "pyenv-for-windows") fork. (Pyenv does not work in Windows outside the Windows Subsystem for Linux.)

If everything completes successfully, you have now installed pyenv.

### Configuring your shell

After it has been installed, you will be required to add the [following](https://github.com/pyenv/pyenv#basic-github-checkout "shell-configuration-for-pyenv") to you shell configuration file `(bash, zshrc, fish)`.

Since I'm using the _[friendly interactive shell](https://fishshell.com/ "the-fish-terminal")_ (fish), I would need to execute the following code:

```bash
$ set -Ux PYENV_ROOT $HOME/.pyenv
$ set -U fish_user_paths $PYENV_ROOT/bin $fish_user_paths
```

and add this to `~/.config/fish/config.fish`:

```text
status is-login; and pyenv init --path | source
```

### Let's try it out

On your terminal go ahead and write

```bash
$ pyenv version
```

The output will be:

> 3.9.5 (set by ~/.pyenv/version)

Depending on the version you have installed when reading this the version will be different.

Let's check out all the commands

```bash
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

It's best to read all the commands so that you are familiar with pyenv, but for now let's install python on your system.

```bash
$ pyenv install -l
```

This will show an extensive list of all the supported python versions, let's look at python3.x.z

```text
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

```bash
$ pyenv install 3.9.5
```

You can install as many versions as you want, I suggest going for the latest release, since eventually it will follow the the most up-to-date changes. With `pyenv` we can also specify which version we would like to run on our system, for this we need to run:

```bash
$ pyenv global 3.9.5
```

This will change (or set) your systems' default version, you can confirm it by running"

```bash
$ python --version
```

You will see the following output

> Python 3.9.5

If you want to change the global python, you can run the same command and specify which version you want to use.
Pyenv also provides you the ability to specify a `local version` of Python per project, in case you require one specific version for any reason, you can run:

```bash
$ pyenv local <version>

Sets the local application-specific Python version(s) by writing the
version name to a file named `.python-version'.

When you run a Python command, pyenv will look for a ".python-version"
file in the current directory and each parent directory. If no such
file is found in the tree, pyenv will use the global Python version
specified with "pyenv global".
```

---

### Conclusion

Although they are other options to manage your Python's version in your computer, and many arguments made in favor or against each tool _(and I do encourage all developers to continue experimenting to find what fits within their toolkit)_, the reality is that when it comes to simplicity and time efficiency, pyenv is one of the best tools you can select and everyone should consider.
