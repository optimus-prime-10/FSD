# Selecting HTML Elements with JavaScript

## Overview
JavaScript provides multiple methods to select and manipulate HTML elements in the DOM. Each method has specific use cases and returns different types of data.

## 1. getElementsByTagName()
- Selects all elements with a specific tag name
- Returns an array of elements
- Example: `document.getElementsByTagName("li")` gets all list items
- Use index to access individual elements: `elements[2]` for third item
- Check count with `.length` property

## 2. getElementsByClassName()
- Selects elements by their CSS class name
- Returns an array (even for single elements)
- Example: `document.getElementsByClassName("btn")`
- Always use index [0] to access the element

## 3. getElementById()
- Selects a single element by its unique ID
- Returns one element (not an array)
- Example: `document.getElementById("title")`
- Can directly manipulate: `element.innerHTML = "New Text"`

## 4. querySelector()
- Uses CSS selector syntax
- Returns the FIRST matching element
- Most flexible method
- Examples:
  - `querySelector("li")` - first list item
  - `querySelector(".btn")` - first element with class "btn"
  - `querySelector("#title")` - element with ID "title"
  - `querySelector("li a")` - first anchor inside list item
  - `querySelector("li.item")` - list item with class "item"

## 5. querySelectorAll()
- Uses CSS selector syntax
- Returns ALL matching elements as a list
- Example: `querySelectorAll("li")` gets all list items
- Access with index: `elements[0]`, `elements[1]`, etc.

## Key Differences

### Array vs Single Element
- **Returns Arrays**: getElementsByTagName(), getElementsByClassName(), querySelectorAll()
- **Returns Single Element**: getElementById(), querySelector()

### Flexibility
- **Most Flexible**: querySelector() and querySelectorAll()
- **Less Flexible**: getElement methods

## Practical Example
To change Google link color to red:
```javascript
// Select anchor tag inside list item
let googleLink = document.querySelector("li a");
// Change color
googleLink.style.color = "red";
```

## When to Use Each Method

### Use querySelector() when:
- You need complex selectors
- You want the first matching element
- You're combining tags, classes, and IDs

### Use getElementById() when:
- You know the exact ID
- You need a single element quickly

### Use getElementsByTagName() when:
- You need all elements of a specific type
- You want to count elements

### Use querySelectorAll() when:
- You need all matching elements
- You want to loop through multiple elements

## Best Practice
querySelector() is most commonly used because it's flexible and can do everything other methods can do, plus more complex selections.

## Next Steps
In the next lesson, we'll learn about manipulating CSS styles using JavaScript.
