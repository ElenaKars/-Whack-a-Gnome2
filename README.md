# Coding challenge "2. EVENT"
![CI](https://github.com/ElenaKars/Whack-a-Gnome2/actions/workflows/web.yml/badge.svg)

Rules for submitting assignments:

1. **Important**: within this coding you can use any package manager
1. **Important**: Everything must be collected via Webpack (including images and styles) and laid out on Github Pages via Appveyor.
1. README.md should contain build badge and link to Github Pages
1. As a result, send the reviewer links to your GitHub projects

---

#### Legend
You have decided to finish the game with goblins, so you need to implement the rest of the logic.

#### Description
You need to complete the game with goblins by implementing the following logic:

1. The goblin spawns at a random point (the set of points is fixed) for exactly 1 second
1. If the user managed to click on this point during this time (try to make a custom cursor in the form of a hammer), then:
* the user gets +1 point
* goblin disappears from cell
1. If the user misses 5 goblin spawns, the game ends.
Try to implement everything not in the form of a single script, but by breaking the application into classes, each of which is responsible for a certain logic.

Everything should be bundled via Webpack (including images and styles) and pushed to Github Pages via CI.

As a result, send the reviewer a link to your GitHub project. Don't forget to set the build badge.