# Steps to create a website From scratch

## CSS Rules and Good practices

- First thing to do is set CSS RESET i.e set those value which is going to apply throughout website
- A good practice would be if we create custom CSS Variables ..
- Ignore pixels(px) units, instead go with (%,rem,em,vh,vw)
- Main component 'div' initialize with #id and actual content initialize with .class
- Before playing with any element first give border and then adjust accordingly ..
- For website responsiveness don't forget to add min, max: height and width, plus make padding and margin as less as screen width
- Before playing with padding and margin play with positions like top, bottom, left, right
- For positioning use FLEXBOX, and for Layouts use GRID!!
- While Designing any component play with parent, child, sibling classes - by adjusting the responsive slider in chrome.
- While developing any component try to make responsive at that time itself!
- Always adjust margin in opposite direction with negative values to avoid messy marginal space ..

---

## Flow of the project

1. The first basic thing for a website is navigation bar, so start with navbar in header, Add up all the stuff which are required
2. Then come up with section part and at the end footer .. Adding copyright is optional!
3. Use utility classes for better efficiency, like use one specific class for whole font, aligning text to center etc
4. Use min and max width, height
5. Give cursor pointer to all buttons
6. Ship all images in git and export in html via link (Don't do this mistake as those images are token generated, This means it'll only work for specific time period only)
7. Add up user-select: none; wherever required and cursor: pointer; for buttons
8. Code clean up - like assigning the right variables and aligning the code by order ..

### Alignment by order

    display
    position
    background(or any color related stuff)
    All font stuff by order
    animations or transitions stuff
    (width
    height
    padding
    margin)         These has to be present at the bottom !!

---

## Errors faced while creating Freelansters website

[__Freelanster Repo Link__](https://github.com/Bhanu1776/Freelancers-Hub.git "Click to redirect GitHub Repo")

1. HTML Forms mei submit button has to be input type=submit to ignore onSubmit method not working!!
2. To use cookie parser don't forget to import package in main file of the backend(App.js)
3. For Forms in HTML, A good practice would be keep same NAME for type and name attribute and the name attribute is fucking imp!!
4. Label ka htmlFor ka value same rahena chaiyeh input ke id ka value!! (htmlFor="same" && id="same")
5. Never ever directly style elements like (p, h1, a, img) instead of this give id or class to each and every element. -- Just to be safe from fucking css conflicts
6. First create backend with all required routes
7. Then, Jump into frontend, In this order => [Login(with all auth), Landing page etc]
