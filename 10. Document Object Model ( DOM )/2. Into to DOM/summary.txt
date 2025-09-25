# Introduction to Document Object Model (DOM)

## What is DOM?
- DOM = Document Object Model
- Converts static websites into interactive ones
- Browser creates tree structure from HTML
- Each element becomes an object we can manipulate

## Why Do We Need DOM?
- Static websites can't respond to user actions
- Can't manually edit HTML/CSS for every user interaction
- DOM allows dynamic changes without page reload
- Makes websites interactive and responsive

## How DOM Works
- Browser reads HTML code
- Converts each element into objects
- Creates tree structure (like organizational chart)
- Elements have relationships: parent, child, sibling

## DOM Tree Structure Example
```
document
├── html
    ├── head
    │   └── title
    └── body
        ├── h1
        ├── input
        ├── button
        └── ul
            ├── li
            ├── li
            └── li
```

## Accessing DOM Elements
- `document` = entire HTML document
- `document.firstElementChild` = HTML element
- `document.lastElementChild` = HTML element
- `document.querySelector("selector")` = specific element

## JavaScript DOM Examples

### Selecting Elements
```javascript
var heading = document.lastElementChild.firstElementChild;
var checkbox = document.querySelector("input");
```

### Changing Content
```javascript
heading.innerHTML = "Good Bye";
```

### Changing Styles
```javascript
heading.style.color = "red";
```

### Simulating Actions
```javascript
checkbox.click();
```

## Objects, Properties & Methods

### Properties (describe attributes)
- `innerHTML` - content inside element
- `style` - CSS styles
- `firstChild` - first child element

### Methods (actions object can perform)
- `click()` - simulates mouse click
- `appendChild()` - adds new child
- `setAttribute()` - sets element attributes

### Dot Notation Examples
```javascript
// Getting property
element.innerHTML

// Setting property
element.style.color = "red";

// Calling method
element.click();
```

## Key Differences
- **Properties**: No parentheses, describe attributes
- **Methods**: Use parentheses, perform actions
- **Functions**: Standalone code blocks
- **Methods**: Belong to objects

## Practical Application
- Select any element on page
- Change its content dynamically
- Modify styles in real-time
- Respond to user interactions
- No page reload needed

## Challenge
Select third list item and change text:
```javascript
var thirdItem = document.querySelector("ul li:nth-child(3)");
thirdItem.innerHTML = "Your Name Here";
```

## Summary
- DOM = Tree of objects representing webpage
- JavaScript can select and manipulate any element
- Properties describe, methods perform actions
- Enables dynamic, interactive websites
- No manual HTML/CSS editing required



https://chromewebstore.google.com/detail/html-tree-generator/dlbbmhhaadfnbbdnjalilhdakfmiffeg