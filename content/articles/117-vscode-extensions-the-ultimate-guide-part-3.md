---
author: Pedro Torres
title: 117 Vscode Extensions - One guide to rule them all (Part 3/5)
date: 2021-06-20T16:09:41+08:00
draft: false

# post thumb
image: images/webp/featured-post/117-extensions-vs-code-stylecloud

# meta description
description: The most comprehensive guide for VScode extensions

# taxonomies
categories:
  - Computer and programming
tags:
  - IDE
  - Toolkit
  - VScode extensions
  - Microsoft
  - Insert Unicode
  - Gitlens
  - Autoclose tags
  - Autorename tags
  - Vscode Python
  - Autodocstring
  - Color Highlight
  - Rainbow CSV
  - Markdown lint
  - Python typehint
  - Pylance

# post type
type: post
---

### [#21 Insert-unicode](https://github.com/brunnerh/insert-unicode)

This is an extension for Visual Studio Code which adds commands for inserting Unicode characters/codes and Emoji.

The commands can be executed via the command palette (View > Command Palette.../ Ctrl + Shift + P) or bound to keyboard shortcuts.

> No longer waste time looking at unicode tables online to get what you need

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  width="856"
  height="302"
  layout="intrinsic"
  title="insert-unicode">

  <source src="../../images/webp/post/117-vscode-extensions/part-3/insert-unicode.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---

### [#22 Gitlens](https://github.com/eamodio/vscode-gitlens)

GitLens simply helps you better understand code. Quickly glimpse into whom, why, and when a line or code block was changed. Jump back through history to gain further insights as to how and why the code evolved. Effortlessly explore the history and evolution of a codebase.

GitLens is powerful, feature rich, and highly customizable to meet your needs.

This is quite useful when you are learning a new codebase or revisiting your own repos. All the information is now available on VSCode.

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  width="747"
  height="610"
  layout="intrinsic"
  title="gitlens">

  <source src="../../images/webp/post/117-vscode-extensions/part-3/gitlens.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---

### [#23 Autoclose tags](https://github.com/formulahendry/vscode-auto-close-tag)

After typing in the closing bracket of the opening tag, the closing tag will be inserted automatically.

**Features**

- Automatically add closing tag when you type in the closing bracket of the opening tag
- After closing tag is inserted, the cursor is between the opening and closing tag
- Set the tag list that would not be auto closed
- Automatically close self-closing tag
- Support auto close tag as Sublime Text 3
- Use Keyboard Shortcut or Command Palette to add close tag manually

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  width="1440"
  height="938"
  layout="intrinsic"
  title="autoclose-tags">

  <source src="../../images/webp/post/117-vscode-extensions/part-3/autoclose-tags.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---

### [#24 Autorename tags](https://github.com/formulahendry/vscode-auto-rename-tag)

Automatically rename paired HTML/XML tag, same as Visual Studio IDE does.

When you rename one HTML/XML tag, automatically rename the paired HTML/XML tag

> This is useful when you don't remember if a tag is void or not and will made you avoid easy mistakes for not closing the tag.

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  width="1440"
  height="938"
  layout="intrinsic"
  title="autorename-tags">

  <source src="../../images/webp/post/117-vscode-extensions/part-3/autorename-tags.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---

### [#25 Vscode Python](https://github.com/Microsoft/vscode-python)

A Visual Studio Code extension with rich support for the Python language (for all actively supported versions of the language: >=3.6), including features such as IntelliSense (Pylance), linting, debugging, code navigation, code formatting, refactoring, variable explorer, test explorer, and more!

**Features**

- [IntelliSense](https://code.visualstudio.com/docs/python/editing#_autocomplete-and-intellisense): Edit your code with auto-completion, code navigation, syntax checking and more

- [Linting](https://code.visualstudio.com/docs/python/linting): Get additional code analysis with Pylint, Flake8 and more

- [Code formatting](https://code.visualstudio.com/docs/python/editing#_formatting): Format your code with black, autopep or yapf

- [Debugging](https://code.visualstudio.com/docs/python/debugging): Debug your Python scripts, web apps, remote or multi-threaded processes

- [Testing](https://code.visualstudio.com/docs/python/unit-testing): Run and debug tests through the Test Explorer with unittest, pytest or nose

- [Jupyter Notebooks](https://code.visualstudio.com/docs/python/jupyter-support): Create and edit Jupyter Notebooks, add and run code cells, render plots, visualize variables through the variable explorer, visualize dataframes with the data viewer, and more

- [Environments](https://code.visualstudio.com/docs/python/environments): Automatically activate and switch between virtualenv, venv, pipenv, conda and pyenv environments

- [Refactoring](https://code.visualstudio.com/docs/python/editing#_refactoring): Restructure your Python code with variable extraction, method extraction and import sorting

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  width="1541"
  height="950"
  layout="intrinsic"
  title="vscode-python">

  <source src="../../images/webp/post/117-vscode-extensions/part-3/vscode-python.webm"
    type="video/webm"/>
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---

### [#26 Autodocstring](https://github.com/NilsJPWerner/autoDocstring)

Visual Studio Code extension to quickly generate docstrings for python functions.

> Spend more time coding, less time writing documentation!

**Features**

- Quickly generate a docstring snippet that can be tabbed through.
- Choose between several different types of docstring formats.
- Infers parameter types through pep484 type hints, default values, and var names.
- Support for args, kwargs, decorators, errors, and parameter types

**Docstring Formats**

- Google (default)
- docBlockr
- Numpy
- Sphinx
- PEP0257 (coming soon)

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  width="1200"
  height="754"
  layout="intrinsic"
  title="autodocstring">

  <source src="../../images/webp/post/117-vscode-extensions/part-3/autodocstring.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---

### [#27 Vscode Color Highlight](https://github.com/enyancc/vscode-ext-color-highlight)

Extension adds colored border around css/web colors in the editor.

This will make it easy to see the color, rather than memorizing its hex code.

{{< rawhtml >}}
<amp-img
alt="color-highlight"
src="../../images/webp/post/117-vscode-extensions/part-3/color-highlight.webp"
width="771"
height="323"
layout="intrinsic"

> </amp-img>
> {{< /rawhtml >}}

---

### [#28 Rainbox CSV](https://github.com/mechatroner/vscode_rainbow_csv)

Add style to your CSVs, who said that they have to be boring?

**Main Features**

- Highlight columns in comma (.csv), tab (.tsv), semicolon and pipe - separated files in different colors
- Transform and filter tables using built-in SQL-like query language
- Provide info about column on hover
- Automatic consistency check for csv files (CSVLint)
- Multi-cursor column edit
- Align columns with spaces and Shrink (trim spaces from fields)

{{< rawhtml >}}
<amp-img
alt="rainbow-csv"
src="../../images/webp/post/117-vscode-extensions/part-3/rainbow-csv.webp"
width="1409"
height="739"
layout="intrinsic"

> </amp-img>
> {{< /rawhtml >}}

---

### [#28 Pylance](https://github.com/microsoft/pylance-release)

Pylance is the default language support for Python in Visual Studio Code and is shipped as part of that extension as an optional dependency.

Pylance provides some awesome features for Python3, including:

- Docstrings
- Signature help, with type information
- Parameter suggestions
- Code completion
- Auto-imports (as well as add and remove import code actions)
- As-you-type reporting of code errors and warnings (diagnostics)
- Code outline
- Code navigation
- Type checking mode
- Native multi-root workspace support
- IntelliCode compatibility
- Jupyter Notebooks compatibility
- Semantic highlighting

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  width="1500"
  height="750"
  layout="intrinsic"
  title="python-pylance">

  <source src="../../images/webp/post/117-vscode-extensions/part-3/python-pylance.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---

### [#29 Python typehint](https://github.com/njqdev/vscode-python-typehint)

Provides type hint auto-completion for Python, with completion items for built-in types, classes and the typing module.

**Features**

- Provides type hint completion items for built-in types, estimated types and the typing module.
- Estimates the correct type to provide as a completion item.
- Can search Python files in the workspace for type estimation purposes.

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  width="601"
  height="303"
  layout="intrinsic"
  title="python-typehint">

  <source src="../../images/webp/post/117-vscode-extensions/part-3/python-typehint.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---
