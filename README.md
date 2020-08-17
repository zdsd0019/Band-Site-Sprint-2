# BandSite - Sprint II

# Project Overview

For this sprint, you have been provided some updated mock ups for an additional screen that will be part of the site, as well as some new features to be added. Another team is developing some back-end functionality for the new features that you will need to use for the following sprint, so for now you will implement these features in the browser using Javascript until the back-end is ready.

Your goal will be to make the site interactive using JavaScript, and to add a second page to the site according to the mockups and design specs.
# Tools & Resources
  * Download the Sprint 2 Design Package which includes the required assets, style guide, spec sheets and mockup. Note: Fonts files contain spaces which can cause bugs when attempting to load the fonts from the file system. Files should be renamed without spaces to avoid errors.
  * As before, use VSCode’s Live SASS Compiler to transform SASS to CSS on the fly. You will need to install the extension into VSCode and click “Watch SASS…” at the bottom of your screen for live SASS compiling.

# Functional Requirements

# Comments Section
* There must be a button that allows a user to add a new comment.
* The user must be able to add their name and a comment.
* The comments must be added such that the newest comments are at the top.
* 3 Default comments must be displayed when the page first loads.

# Shows Page

* There must be a song that can be played. The song can be any song you choose.

# Visual Design Requirements

* The site must be responsive and therefore should closely resemble the mockups in the design package.
* The site must be responsive at all dimensions, including between the provided break-points.
* The CSS classes must use BEM principles.
* The site must use Flexbox for layout.

# Implementation Requirements

* Your project must follow the proper folder structure and naming convention outlined in the project guidelines
* The project's CSS must use be derived from SASS and use any SASS features that make the code more concise and reusable, such as variables or mixins.

# Bio Page - Comments Section
* You must have an array in JavaScript with 3 default comment objects to start. Comments must have a name, a timestamp, and the comment.
* You must have a function called displayComment() that takes in one comment object as a parameter and displays it on the page using JavaScript DOM manipulation.
* You must use an HTML Form with the following functionality:
* That submits using the addEventListener
  * Prevents the page from reloading when submitting a new comment
  * Constructs a new comment object
  * Pushes a new comment object to an array of comments
  * Clears all comments from the page
  * Re-renders to the page all comments from the comment array
  * Clears the input fields after submitting a new comment

# Shows Page
* You must embed a song of your choice from SoundCloud using an iframe
* You must create the table using JavaScript DOM manipulation / flexbox layout.

 
