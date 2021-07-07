---
author:
  name: Pedro Torres
  homepage: https://absolutearray.com/
title: "117 Vscode Extensions - One guide to rule them all (Part 4/5)"
date: 2021-06-25T16:09:41+08:00
publishdate: 2021-06-25T16:09:41+08:00
draft: true

# post thumb
image:
  src: images/post/117-extensions-vs-code-stylecloud-part-4.png

# meta description
description: The most comprehensive guide for VScode extensions
summary: The most comprehensive guide for VScode extensions

# taxonomies
categories:
  - Computer and programming
tags:
  - IDE
  - Toolkit
  - VScode extensions
  - Microsoft
  - Live server
  - Jinja
  - Jshint
  - Wakatime
  - Webhint
  - HTML boilerplate
  - TODO tree
  - Leetcode
  - Highlight matching tag
  - TailwindCSS

keywords:
  - IDE
  - Toolkit
  - VScode extensions
  - Microsoft
  - Live server
  - Jinja
  - Jshint
  - Wakatime
  - Webhint
  - HTML boilerplate
  - TODO tree
  - Leetcode
  - Highlight matching tag
  - TailwindCSS

ogp:
  title: 117 Vscode Extensions - One guide to rule them all (Part 3/5)
  url: https://absolutearray.com/articles/117-vscode-extensions-the-ultimate-guide-part-3/
  description: The most comprehensive guide for VScode extensions
  image: images/post/pyenv-stylecloud.png
  site: images/post/117-extensions-vs-code-stylecloud.png

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
src="images/post/117-extensions-vs-code-stylecloud-part-4.png"
width="1500"
height="1500"
layout="responsive" >}}

## [#30 JShint](https://github.com/Microsoft/vscode-jshint)

---

## [#31 LiveServer](https://github.com/ritwickdey/vscode-live-server)

Launch a local development server with live reload feature for static & dynamic pages.

**Features**

- A Quick Development Live Server with live browser reload.
- Start or Stop server by a single click from status bar.
- Open a HTML file to browser from Explorer menu.[Quick Gif Demo].
- Support for excluding files for change detection.
- Hot Key control.
- Customizable Port Number, Server Root, default browser.
- Support for any browser (Eg: Firefox Nightly) using advance Command Line.
- Support for Chrome Debugging Attachment (More Info). [Quick Gif Demo].
- Remote Connect through WLAN (E.g.: Connect with mobile) [Need Help? See FAQ Section]
- Use preferable host name (localhost or 127.0.0.1).
- Customizable Supporting Tag for Live Reload feature. (Default is Body or head)
- SVG Support
- https Support.
- Support for proxy.
- CORS Enabled
- Multi-root workspace supported.
- Support for any file even dynamic pages through Live Server Web Extension.

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  poster="../../../images/preloader/web-preloader.svg"
  width="896"
  height="480"
  layout="responsive"
  title="LiverServer">

  <source src="../../../images/webm/post/117-vscode-extensions/part-4/liverserver.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---

## [#32 Jinja](https://github.com/wholroyd/vscode-jinja)

{{< amp-image
alt="jinja"
src="images/post/117-vscode-extensions/part-4/jinja.png"
width="1920"
height="1020"
layout="responsive" >}}

---

## [#33 Wakatime](https://github.com/wakatime/vscode-wakatime)

WakaTime is an open source VS Code plugin for metrics, insights, and time tracking automatically generated from your programming activity.

**With this you will be able to get access to:**

- Projects, languages, and branches automatically detected
- Weekly email reports with your coding stats
- Private leaderboards
- Set coding goals

Wakatime comes also available with a great source of plugins

> Check out my stats below

{{< amp-image
alt="wakatime"
src="images/post/117-vscode-extensions/part-4/wakatime.png"
width="1624"
height="916"
layout="responsive" >}}

---

## [#34 Leetcode](https://github.com/LeetCode-OpenSource/vscode-leetcode)

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  poster="../../../images/preloader/web-preloader.svg"
  width="1536"
  height="960"
  layout="responsive"
  title="leetcode">

  <source src="../../../images/webm/post/117-vscode-extensions/part-4/leetcode.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---

## [#35 Webhint](https://github.com/webhintio/hint)

Webhint is a customizable linting tool that helps you improve your site's accessibility, speed, cross-browser compatibility, and more by checking your code for best practices and common errors.

To use it from the CLI you will need to install [`Node.js`](https://nodejs.org/en/) (v10.x or later) on your machine, and you can use `npx` to test it.

You can also install it locally in your project by running:

```bash
npm install hint --save-dev
```

You can then include it within a script task in your `package.json`

```json
{
    ...
    "scripts": {
        "webhint": "hint"
    }
}
```

---

## [#35 Highlight matching tag](https://github.com/vincaslt/vscode-highlight-matching-tag)

This extension highlights matching opening and/or closing tags. Optionally it also shows path to tag in the status bar. Even though VSCode has some basic tag matching, it's just that - basic. This extension will try to match tags anywhere: from tag attributes, inside of strings, any files, while also providing extensive styling options to customize how tags are highlighted.

Officially supported markup: HTML and JSX. Other flavors (XML, Vue, Angular, PHP) should work, but there are no guarantees. Feel free to report the issues on them anyway.

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  poster="../../../images/preloader/web-preloader.svg"
  width="529"
  height="306"
  layout="responsive"
  title="highlight-matching-tags">

  <source src="../../../images/webm/post/117-vscode-extensions/part-4/highlight-matching-tags.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---

## [#36 HTML Boilerplate](https://github.com/sidthesloth92/vsc_html5_boilerplate)

This is a Visual Studio Code snippet extension for generating HTML 5 boilerplate code

Type 'html5-boilerplate' in an HTML file and select the snippet from the auto suggestion dropdown to get the HTML boilerplate.

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  poster="../../../images/preloader/web-preloader.svg"
  width="600"
  height="372"
  layout="responsive"
  title="html-boilerplate">

  <source src="../../../images/webm/post/117-vscode-extensions/part-4/html-boilerplate.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---

## [#36 TailwindCSS](https://github.com/tailwindlabs/tailwindcss-intellisense)

Tailwind CSS IntelliSense enhances the Tailwind development experience by providing Visual Studio Code users with advanced features such as autocomplete, syntax highlighting, and linting.

**Features**

- Autocomplete - Intelligent suggestions for class names, as well as [CSS functions and directives](https://tailwindcss.com/docs/functions-and-directives/)
- Linting
- Hover Preview
- CSS Syntax Highlighting

{{< amp-image
alt="tailwindcss"
src="images/post/117-vscode-extensions/part-4/tailwindcss.png"
width="2080"
height="1170"
layout="responsive" >}}

---

## [#37 TODO Tree](https://github.com/Gruntfuggly/todo-tree)

{{< amp-image
alt="todo-tree"
src="images/post/117-vscode-extensions/part-4/todo-tree.png"
width="2192"
height="966"
layout="responsive" >}}

---

## [#37 Highlight matNEEED TO FIX ITching tag](https://github.com/njqdev/vscode-python-typehint)

---

## [#38 Hexeditor](https://github.com/microsoft/vscode-hexeditor)

A custom editor extension for Visual Studio Code which provides a hex editor for viewing and manipulating files in their raw hexadecimal representation.

**features**

- Opening files as hex
- A data inspector for viewing the hex values as various different data types
- Editing with undo, redo, copy, and paste support
- Find and replace

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  poster="../../../images/preloader/web-preloader.svg"
  width="2880"
  height="1582"
  layout="responsive"
  title="hexeditor">

  <source src="../../../images/webm/post/117-vscode-extensions/part-4/hexeditor.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---

## [#39 Bootstrap4](https://github.com/1tontech/bootstrap4-snippets)

Visual studio extension & Intellij plugin for Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets/live templates

---

## [#40 Shellcheck](https://github.com/timonwong/vscode-shellcheck)

{{< rawhtml >}}
<amp-video autoplay loop noaudio
  poster="../../../images/preloader/web-preloader.svg"
  width="1920"
  height="948"
  layout="responsive"
  title="shellcheck">

  <source src="../../../images/webm/post/117-vscode-extensions/part-4/shellcheck.webm"
    type="video/webm" />
  <div fallback>
    <p dir="ltr">Upgrade your browser to see the video.</p>
  </div>
</amp-video>
{{< /rawhtml >}}

---
