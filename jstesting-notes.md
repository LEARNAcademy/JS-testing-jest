TDD (test before coding) and BDD (behavior of an app, user experience)

TDD
"Red, green, refactor"
Write the test first
Make it fail (red)
Write the code
Make it pass (green)
Safer to refactor other parts of the app

advantages

breaks problems down into smaller pieces
helps avoid feature creep - stay focused on essential piece of the program
keeps you focused on the
closer to 100% test coverage
tests can save you time in the end (deployed app that breaks with no tests - could be hard to pinpoint problem.)


smallest = unit or functional testing is just testing functions

next = integration testing is testing how everything is interacting with each other  (rails api)

Jest cheat sheet - github
https://github.com/sapegin/jest-cheat-sheet#numbers

Set up
create a repo on github called JStesting
initialize a read me
clone folder to desktop
cd into JStesting
touch JStesting.test.js
type atom . in terminal


Type this in your terminal
If you are using your own laptop, in terminal put...
yarn add jest
make sure you are in the right folder
run tests with this command - yarn jest

For Practice...LEARNAcademy / JS-foundations / JStesting-practice
