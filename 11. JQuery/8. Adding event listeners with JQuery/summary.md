# Adding Event Listeners with jQuery

## Overview
jQuery makes adding event listeners much easier than vanilla JavaScript.
No loops needed for multiple elements - jQuery handles it automatically.

## Click Event Listener
**Basic click listener on h1:**
```javascript
$("h1").click(function() {
    $("h1").css("color", "purple");
});
```
Clicking the h1 changes its color to purple.

## Multiple Elements (jQuery vs Vanilla JS)

**Vanilla JavaScript (requires loop):**
```javascript
for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "purple";
    });
}
```

**jQuery (no loop needed):**
```javascript
$("button").click(function() {
    $("h1").css("color", "purple");
});
```
jQuery automatically applies to all buttons.

## Keypress Event Listener
**On input element:**
```javascript
$("input").keypress(function(event) {
    console.log(event.key);
});
```
Logs each pressed key to console.

**On entire document:**
```javascript
$(document).keypress(function(event) {
    console.log(event.key);
});
```
Detects keystrokes anywhere on the page.

## Challenge: Display Key in h1
```javascript
$(document).keypress(function(event) {
    $("h1").text(event.key);
});
```
Shows pressed key in h1 element.

## The .on() Method
More flexible way to add event listeners:
```javascript
$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});
```
Works with any event type (click, mouseover, etc.).

## Key Benefits
- Simpler syntax than vanilla JavaScript
- No loops needed for multiple elements
- Automatic event binding to all matching elements
- Flexible .on() method for any event type
- Easy DOM manipulation in response to user actions

## Common Events
- click: Mouse clicks
- keypress: Keyboard input
- mouseover: Mouse hover
- submit: Form submission
- change: Input value changes
