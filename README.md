# Coding challenge "2. DOM"
![CI](https://github.com/ElenaKars/Whack-a-Gnome/actions/workflows/web.yml/badge.svg)

Rules for submitting assignments:

1. **Important**: within this coding you can use any package manager
1. **Important**: Everything must be collected via Webpack (including images and styles) and laid out on Github Pages via Appveyor.
1. README.md should contain build badge and link to Github Pages
1. As a result, send the reviewer links to your GitHub projects

---

### Move element

#### Legend

You decided to have fun and implement a kind of game where gnomes (or other creatures) jump out of "holes" and you need to hit them with a hammer:

![](./pic/GracefulMiniatureBustard-small.gif)

Copyright gfycat.com

#### Description

Build the project infrastructure based on Webpack, ESLint, Babel, Jest, Webpack Dev Server.

Since we are more humane, you only need to implement the first part of this game - moving an object into the DOM Tree.

To do this, independently develop a 4x4 playing field and a character in the form of an `img` image (when loading the page, it should be programmatically generated and placed in a random position inside the playing field). Use the `setInterval` function to schedule the movement of an existing `img` object to another field (the algorithm is a random move, not moving to the same field).

For a character picture, use the following:

![](./pic/goblin.png)

Important: do not use `removeChild`! Check what happens if `Node` changes parent.

Everything should be bundled via Webpack (including images and styles) and pushed to Github Pages via CI.