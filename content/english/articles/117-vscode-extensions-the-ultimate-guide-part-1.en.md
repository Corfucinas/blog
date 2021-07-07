---
author:
  name: Pedro Torres
  homepage: https://absolutearray.com/
  bio: "Interested in algorithm trading, computer languages (Python, JS, SQL, Solidity, Rust), philosophy, and blockchain technology. For me, the most important traits are someone who can be: performance-driven, high integrity, self-disciplined, autodidacticism, and is goal-oriented. My priority is spearheading the development of products with clear communication guidelines."

draft: false

title: 117 Vscode Extensions - One guide to rule them all (Part 1/5)
date: 2021-05-24T16:09:41+08:00
publishdate: 2021-05-24T16:09:41+08:00

summary: The most comprehensive guide for VScode extensions

# meta description
description: The most comprehensive guide for VScode extensions

# post thumb
image:
  src: images/post/117-extensions-vs-code-stylecloud.png

# taxonomies
categories:
  - Computer and programming

tags:
  - IDE
  - Learn to program
  - Toolkit
  - VScode extensions
  - Microsoft
  - x86_64-assembly-vscode
  - Better-comments
  - Codesnap
  - Snazzy plus
  - Bookmarks
  - Gitignore
  - Emojisense
  - Sourcery
  - Markdown all in one
  - Trailing spaces

keywords:
  - IDE
  - Learn to program
  - Toolkit
  - VScode extensions
  - Microsoft
  - x86_64-assembly-vscode
  - Better-comments
  - Codesnap
  - Snazzy plus
  - Bookmarks
  - Gitignore
  - Emojisense
  - Sourcery
  - Markdown all in one
  - Trailing spaces

amp:
  elements:
    - amp-social-share

ogp:
  title: 117 Vscode Extensions - One guide to rule them all (Part 1/5)
  url: https://absolutearray.com/articles/117-vscode-extensions-the-ultimate-guide-part-1/
  description: The most comprehensive guide for VScode extensions
  image: images/post/pyenv-stylecloud.png
  site: https://absolutearray.com/articles/117-vscode-extensions-the-ultimate-guide-part-1/

sitemap:
  changefreq: weekly
  priority: 0.5
  filename: sitemap.xml

# post type
type: post
series: ["117 Vscode Extensions"]
---

{{< amp-image
alt="117-extensions-vs-code-stylecloud"
src="images/post/117-extensions-vs-code-stylecloud.png"
width="1500"
height="1500"
layout="responsive" >}}

# Before you read

I've seen a lot of guides around the web (specially those published in the [Medium website](http://medium.com/ "medium-website-homepage"), they are usually recycling the same extensions over and over again, with the clear distinction that some of them are specific to a programming language or a certain task. For that reason, I've decided to compile all the extensions that I have used for a task or that I find useful for anyone into a five-part series. All of these extensions will be useful to you one way or another, and are not limited to a language or task. They are good extensions that will make a lot of aspects developing a better experience.

Without further ado (and in no specific order of priority nor preference), here's the _ultimate VScode guide extension_.
**You can also can click their names to navigate to their github repo.**. If you want to install them, you can write the extension name on VScode _extensions:marketplace_

## [#1 Language-x86-64-assembly](https://github.com/13xforever/x86_64-assembly-vscode "Language-x86-64-assembly-github")

Visual Studio Code package with x86 and x86_64 assembly syntax support.

This is a TextMate/Sublime/VS Code/Atom bundle providing language support for x86_64 assembly language in a variety of dialects (nasm/yasm primarily, but could highlight tasm/gas to some extent).

- Basic support for NASM/YASM/TASM/GAS syntaxes
- Most up-to-date instruction sets:

  - Legacy/undocumented registers and instructions
  - FPU/MMX/3DNow!
  - SSE/SSE2/(S)SSE3/SSE4/SSE4.1/SSE4.2/SSE4.a
  - AVX/AVX2/AVX512, including pseudo-ops
  - AES-NI/SHA
  - VMX/SMX/NPX/SGX
  - other AMD/Cyrix/VIA and planned future Intel extensions

{{< amp-image
alt="language-x86-64-assembly"
src="images/post/117-vscode-extensions/part-1/language-x86-64-assembly.png"
width="1856"
height="1200"
layout="responsive" >}}

## [#2 Better-comments](https://github.com/aaron-bond/better-comments "Better-comments-github")

The Better Comments extension will help you create more human-friendly comments in your code.
With this extension, you will be able to categorize your annotations into:

- Alerts
- Queries
- TODOs
- Highlights
- Commented out code can also be styled to make it clear the code shouldn't be there
- Any other comment styles you'd like can be specified in the settings

It has a lot of supported languages:

```text
* Ada
* AL
* Apex
* AsciiDoc
* BrightScript
* C
* C#
* C++
* ColdFusion
* Clojure
* COBOL
* CoffeeScript
* CSS
* Dart
* Dockerfile
* Elixir
* Elm
* Erlang
* F#
* Fortran
* gdscript
* GenStat
* Go
* GraphQL
* Groovy
* Haskell
* Haxe
* HiveQL
* HTML
* Java
* JavaScript
* JavaScript React
* JSON with comments
* Julia
* Kotlin
* LaTex (inlc. Bibtex/Biblatex)
* Less
* Lisp
* Lua
* Makefile
* Markdown
* Nim
* MATLAB
* Objective-C
* Objective-C++
* Pascal
* Perl
* Perl 6
* PHP
* Pig
* PlantUML
* PL/SQL
* PowerShell
* Puppet
* Python
* R
* Racket
* Ruby
* Rust
* SAS
* Sass
* Scala
* SCSS
* ShaderLab
* ShellScript
* SQL
* STATA
* Stylus
* Swift
* Tcl
* Terraform
* Twig
* TypeScript
* TypeScript React
* Verilog
* Visual Basic
* Vue.js
* XML
* YAML
```

{{< amp-image
alt="better-comments"
src="images/post/117-vscode-extensions/part-1/better-comments.png"
width="730"
height="291"
layout="responsive" >}}

---

## [#3 Codesnap](https://github.com/kufii/CodeSnap "codesnap-github")

Take beautiful screenshots of your code in VS Code!

### Features

- Quickly save screenshots of your code
- Copy screenshots to your clipboard
- Show line numbers
- Many other configuration options

{{< amp-image
alt="codesnap"
src="images/post/117-vscode-extensions/part-1/codesnap.png"
width="1328"
height="1332"
layout="responsive" >}}

---

## [#4 Snazzy plus](https://github.com/akarlsten/snazzy-plus "Snazzy-plus-github")

A VS Code theme based on hyper-snazzy and vscode-snazzy-operator.

Changes compared to Aaron Thomas version are:

- Theming for every part of the UI. If I missed anything let me know!
- A darker yellow color (taken from Dracula, i think) as the pale yellow in the original didn't appeal to me.
- Alternate version with italics for keywords like "this" and "class" for use with Operator/Dank Mono.
- Alternate darker version that I've started preferring on my brighter laptop screen

> This is also my favorite theme for VScode, after having spent a lot of time with the Dracula theme

{{< amp-image
alt="snazzy-plus-dark"
src="images/post/117-vscode-extensions/part-1/snazzy-plus-dark.png"
width="1761"
height="1313"
layout="responsive" >}}

---

## [#5 Bookmarks](https://github.com/alefragnani/vscode-bookmarks "Bookmarks-github")

It helps you to navigate in your code, moving between important positions easily and quickly. No more need to search for code. It also supports a set of selection commands, which allows you to select bookmarked lines and regions between bookmarked lines. It's really useful for log file analysis.

Here are some of the features that Bookmarks provides:

```text
- Mark/unmark positions in your code
- Mark positions in your code and give it name
- Jump forward and backward between bookmarks
- Icons in gutter and overview ruler
- See a list of all Bookmarks in one file and project
- Select lines and regions with bookmarks
- A dedicated Side Bar
```

**Navigate your code as navigate your favorite book**

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  poster="../../../images/preloader/web-preloader.svg"
  width="662"
  height="448"
  layout="responsive"
  title="bookmarks-github">

  <source src="../../../images/webm/post/117-vscode-extensions/part-1/bookmarks-list-from-all-files.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---

## [#6 Gitignore](https://github.com/CodeZombieCH/vscode-gitignore "Gitignore-github")

A extension for Visual Studio Code that assists you in working with .gitignore files.

Save precious development time by just running `Ctrl+Shift+P or F1` and type `Add gitignore`.
After that, just select the your language. Check out below how the _python_ `.gitignore` looks.

{{< amp-image
alt="gitignore"
src="images/post/117-vscode-extensions/part-1/gitignore.png"
width="1454"
height="1612"
layout="responsive" >}}

---

## [#7 Emojisense](https://github.com/mattbierner/vscode-emojisense "Emojisense-github")

Adds suggestions and autocomplete for emoji to VS Code.

- Quickly insert emoji using the : emoji : syntax supported by Github and many other sites
- Insert emoji markup by typing ::
- Enable and control emoji completion settings per language
- See emoji previews of : emoji : style markup inline
  -Can be enabled in VS Code's SCM (git) input box.
  -Provide an emoji picker to select and insert an emoji in the editor or terminal. To access the picker, run the Emojisense: Pick an emoji
  command, or use the default keybindings

> Check out the list of supported **[emojis](https://www.webpagefx.com/tools/emoji-cheat-sheet/)**

Forget about looking up the _[unicode](https://www.unicode.org/emoji/charts/full-emoji-list.html)_ for your emoji ever again

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  poster="../../../images/preloader/web-preloader.svg"
  width="830"
  height="396"
  layout="responsive"
  title="emojisense">

  <source src="../../../images/webm/post/117-vscode-extensions/part-1/emojisense.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---

## [#8 Sourcery](https://github.com/sourcery-ai/sourcery-vscode "Sourcery-github")

This is a great extension if you're a python developer.

> Sourcery is your personal coding assistant that helps you write better, cleaner, Python code. It suggests refactoring on the fly to instantly improve your code.

Sourcery runs in the background whenever you're working on Python files. Keep an eye out for sections of your code underlined in blue - that means Sourcery has a suggestion!

Hover over a Sourcery suggestion to see a description of what Sourcery wants you to change along with the diff of the proposed changes. Then either use the quickfix menu (Ctrl+. or Cmd+. for most people) or click on the lightbulb icon to bring up the Sourcery menu and choose to accept or reject the changes.

Sourcery also provides quality metrics for every function you write (plus warnings for really bad code).

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  poster="../../../images/preloader/web-preloader.svg"
  width="600"
  height="457"
  layout="responsive"
  title="sourcery-python">

  <source src="../../../images/webm/post/117-vscode-extensions/part-1/sourcery-python.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---

## [#9 Markdown All in One](https://github.com/yzhang-gh/vscode-markdown "markdown-github")

All you need for Markdown (keyboard shortcuts, table of contents, auto preview and more).

With this extension you will have:

- Keyboard shortcuts
- Table of contents
- List editing
- Print Markdown to HTML
- Github Flavored Markdown
- Math
- Auto completions

> This is particularly useful is you're into front-end development. This website is written using **[Hugo](https://gohugo.io/)**, one of the most popular open-source static site generators, the content you are reading right now it's written in markdown, [take a look!](https://raw.githubusercontent.com/Corfucinas/blog/master/content/blog/117-vscode-extensions-the-ultimate-guide-part-1.md).

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  poster="../../../images/preloader/web-preloader.svg"
  width="1536"
  height="676"
  layout="responsive"
  title="markdown-all-in-one">

  <source src="../../../images/webm/post/117-vscode-extensions/part-1/markdown-all-in-one.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---

## [#10 Trailing spaces](https://github.com/shardulm94/vscode-trailingspaces "trailing-spaces-repo")

A VS Code extension that allows you to highlight trailing spaces and delete them in a flash!

This extension is a port of the popular Sublime Text plugin Trailing Spaces.

> VS Code provides a way to automate deletion of trailing spaces by using the Trim Trailing Whitespace command. Depending on your settings, it may be more handy to just highlight them and/or delete them by hand, at any time. This plugin provides just that, and a lot of options to fine-tune the way you want to decimate trailing spaces.

{{< amp-image
alt="trailing-spaces"
src="images/post/117-vscode-extensions/part-1/trailing-spaces.png"
width="976"
height="167"
layout="responsive" >}}

---

### Thanks for reading the first part

[You can read Part 2 of this series here](../../en/articles/117-vscode-extensions-the-ultimate-guide-part-2/index.html "part 2 of the series")
