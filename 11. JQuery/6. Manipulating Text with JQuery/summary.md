# Manipulating Text with jQuery

## Overview
jQuery provides simple methods to change text and HTML content
of selected elements on web pages.

## Two Main Methods

### 1. .text() Method
- Changes plain text content only
- Ignores HTML tags
- Example: $("button").text("goodbye")
- Updates all matching elements at once

### 2. .html() Method  
- Allows HTML tags and formatting
- Interprets HTML markup
- Example: $("button").html("<em>goodbye</em>")
- Creates italicized or formatted text

## Key Differences

**Text Method:**
- Input: "Hello <em>world</em>"
- Output: Hello <em>world</em> (shows tags as text)

**HTML Method:**
- Input: "Hello <em>world</em>"  
- Output: Hello world (italicized)

## How It Works

1. Select elements using jQuery selector
2. Apply .text() or .html() method
3. Pass new content in parentheses
4. All matching elements get updated

## Examples

```javascript
// Change button text
$("button").text("Click me!");

// Add formatted text
$("h1").html("<em>Welcome</em> to our site");

// Update multiple elements
$(".class-name").text("Updated content");
```

## Important Notes

- jQuery selects ALL matching elements
- Methods use dot notation (element.method())
- jQuery is built on JavaScript
- Understanding vanilla JavaScript is essential
- jQuery reduces code repetition
- Makes web development faster and easier

## Best Practices

- Use .text() for plain content
- Use .html() when formatting needed
- Learn JavaScript fundamentals first
- jQuery simplifies but doesn't replace JavaScript
- Test changes by refreshing the page

## Next Steps
Learn to manipulate HTML attributes using jQuery
methods for even more control over elements.
