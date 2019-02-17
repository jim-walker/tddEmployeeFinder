# Testing an Existing App

## Overview

The goal from this homework assignment is for you to add testing infrastructure to code that you've already written. This will be a little different, and might be a bit of a challenge depending on how you've approached your previous homework assignments. If need be, you can use one of the homework solutions provided previously.

Your goal is to pick a few pieces of your code that you want to refactor so you can write unit tests for it. The end result of your app should not change!

## Before You Begin

Choose a previous homework assignment. You have a couple options here:
 
* Full stack app (recommended):

  * You already have a `package.json` and it should be pretty straightforward to set up your testing environment. Additionally, you'll have files that already export functions, so it will be easier to set up unit tests.

* Front-end only app (not recommended):

  * Since we haven't learned how to package together a modular front end codebase, it will be a bit more challenging making your code unit test-friendly. Additionally, you don't have a `package.json` set up yet and in addition to setting up your test infrastructure, you may have to serve your static files to even write end to end tests.

Look through your code and identify something that can be turned into a testable function:

  * A "pure" function is one that takes in arguments and has a return value with no side effects. Your current implementation may rely on or even change global variables, but usually code like that can be changed to rely on a pure function.

  * **Highly Recommended**: talk to the instructor or TAs to see if you've chosen a good piece of code to refactor. 
  
  * _Don't spend more than 30 minutes trying to make this decision_. If you find yourself lost, just ask for help picking something. Spotting code that can be modularized and turned into functions is something that gets a lot faster after a while, and the point of this assignment is for you to practice test-driven refactoring -- not to get good at spotting code that can be refactored.

## Submission on BCS

You'll submit a link to your deployed assignment as well as the respository in BCS just like you did with the original assignment. Make sure your deployed version still works!

## Instructions

1. Pseudocode three functions you'll be creating tests for. Create a list of specifications such as what parameters it should take and how logic should be handled within those functions.

2. Write at least 2 positive and 2 negative unit tests reflecting your specifications. Think about edge cases and boundary conditions.

3. Refactor your code and implement the function to make the unit tests pass. Make sure that your entire code base is still functioning the way it is intended to.

## Minimum Requirements

You have selected at least three functions that you would like to create tests for. Then, you will have written at least 2 positive and 2 negative unit tests. Refactor your function based on any discoveries you've made while testing those three functions and implement them into your code.
