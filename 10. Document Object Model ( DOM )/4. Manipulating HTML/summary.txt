# Manipulating HTML Elements with JavaScript

## Overview
JavaScript can dynamically change HTML element styles 
using the DOM style property.

## Basic Syntax
```javascript
document.querySelector('h1').style.color = "red";
```

## Key Concepts

### 1. Property Naming Convention
CSS properties become camel-cased in JavaScript:
- `font-size` → `fontSize`
- `background-color` → `backgroundColor`
- `line-height` → `lineHeight`

### 2. Value Format
All values must be strings in JavaScript:
```javascript
// Correct
element.style.fontSize = "10rem";
element.style.padding = "20px";

// Incorrect
element.style.fontSize = 10rem;
element.style.padding = 20px;
```

## Examples

### Changing Text Color
```javascript
document.querySelector('h1').style.color = "red";
```

### Changing Font Size
```javascript
document.querySelector('h1').style.fontSize = "10rem";
```

### Changing Background Color
```javascript
document.querySelector('button').style.backgroundColor = "yellow";
```

### Hiding Elements
```javascript
document.querySelector('.element').style.visibility = "hidden";
```

## Practice Exercise
Change button background color to yellow:
```javascript
document.querySelector('button').style.backgroundColor = "yellow";
```

## Developer Tools
Use Chrome Developer Tools to:
- Experiment with CSS changes
- Test JavaScript style modifications
- Understand property names

## Key Takeaways
1. Use camelCase for CSS property names
2. Always use string values
3. Access style property of DOM elements
4. Practice with developer tools

## Next Steps
Learn about separation of concerns and 
toggling CSS classes with JavaScript.
